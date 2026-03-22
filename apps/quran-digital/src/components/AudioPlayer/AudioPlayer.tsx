'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { getBestAudioUrl, getAudioLoadingStrategy } from '#/utils/audioUtils';
import { useAudio } from '#/contexts/AudioContext';
import SearchableDropdown from '#/components/SearchableDropdown';
import { useToast } from '@repo/ui';

interface AudioPlayerProps {
  audioSources: Record<string, string>;
  title: string;
  subtitle?: string;
  autoPlay?: boolean;
  className?: string;
  onQariChange?: (qariId: string) => void;
  defaultQari?: string;
  totalAyat?: number;
  onStartSequentialPlay?: () => void;
}

const QARI_NAMES: Record<string, string> = {
  '01': 'Abdullah Al-Juhany',
  '02': 'Abdul Muhsin Al-Qasim',
  '03': 'Abdurrahman as-Sudais',
  '04': 'Ibrahim Al-Dossari',
  '05': 'Misyari Rasyid Al-Afasi',
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioSources,
  title,
  subtitle,
  autoPlay = false,
  className = '',
  onQariChange,
  defaultQari = '05',
  totalAyat,
  onStartSequentialPlay
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedQari, setSelectedQari] = useState(defaultQari);
  const [error, setError] = useState<string | null>(null);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showResetButton, setShowResetButton] = useState(false);
  const { showInfo } = useToast();
  const hasShownDeviceToastRef = useRef(false);
  
  // Use global audio context
  const { 
    currentPlayingId, 
    setCurrentPlaying, 
    audioRefs, 
    isReplayEnabled, 
    replayTimeoutRefs,
    isSequentialPlaying,
    setIsSequentialPlaying,
    setIsReplayEnabled
  } = useAudio();
  const audioId = 'full-surat-player';

  // Memoize audio URL to prevent infinite re-renders
  const currentAudioUrl = useMemo(() => {
    const url = getBestAudioUrl(audioSources, selectedQari);
    console.log('🎵 [AudioPlayer] URL Memoized:', {
      selectedQari,
      url,
      timestamp: new Date().toISOString()
    });
    return url;
  }, [audioSources, selectedQari]);

  // Reset error state when URL changes (surah navigation)
  useEffect(() => {
    console.log('🔄 [AudioPlayer] Resetting state for new URL:', currentAudioUrl);
    setError(null);
    setLoading(false);
  }, [currentAudioUrl]);

  // Detect iOS
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent) || 
                       (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(isIOSDevice);
  }, []);

  useEffect(() => {
    if (!isIOS) return;
    if (hasShownDeviceToastRef.current) return;
    hasShownDeviceToastRef.current = true;
    showInfo('Anda menggunakan iPhone/iOS. Jika audio macet, gunakan tombol "Audio macet? Tap untuk muat ulang".');
  }, [isIOS, showInfo]);

  // iOS audio unlock function
  const unlockAudioiOS = useCallback(async () => {
    if (!isIOS || audioUnlocked || !audioRef.current) return true;
    
    try {
      // Simple unlock by trying to play current audio silently
      const audio = audioRef.current;
      const originalVolume = audio.volume;
      audio.volume = 0;
      await audio.play();
      audio.pause();
      audio.currentTime = 0;
      audio.volume = originalVolume;
      setAudioUnlocked(true);
      return true;
    } catch (error) {
      console.warn('Failed to unlock iOS audio:', error);
      return false;
    }
  }, [isIOS, audioUnlocked]);

  const forceReloadAudio = useCallback(
    async (overrideUrl?: string): Promise<boolean> => {
      const audio = audioRef.current;
      const urlToUse = overrideUrl ?? currentAudioUrl;
      if (!audio) return false;

      try {
        setLoading(true);
        setError(null);
        audio.pause();
        audio.removeAttribute('src');
        audio.load();

        if (urlToUse) {
          audio.src = urlToUse;
        }
        audio.load();

        setCurrentPlaying(audioId);
        await audio.play();
        setLoading(false);
        return true;
      } catch {
        setCurrentPlaying(null);
        setLoading(false);
        setError(isIOS ? 'Gagal memutar audio. Tap tombol play lagi.' : 'Gagal memutar audio. Periksa koneksi internet Anda.');
        return false;
      }
    },
    [audioId, currentAudioUrl, isIOS, setCurrentPlaying]
  );

  useEffect(() => {
    if (!audioRef.current) return;
    if (!isIOS) return;

    try {
      const audio = audioRef.current;
      audio.pause();
      audio.currentTime = 0;
      audio.removeAttribute('src');
      audio.load();
      if (currentAudioUrl) {
        audio.src = currentAudioUrl;
      }
      audio.load();
      setCurrentTime(0);
      setDuration(0);
      setCurrentPlaying(null);
    } catch {
      // ignore
    }
  }, [currentAudioUrl, isIOS, setCurrentPlaying]);
  // Register this audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRefs.current[audioId] = audioRef.current;
    }
    return () => {
      // Simple cleanup
      const audio = audioRefs.current[audioId];
      if (audio) {
        try {
          audio.pause();
        } catch (e) {
          // Ignore cleanup errors
        }
      }
      delete audioRefs.current[audioId];
      
      // Clear any pending replay timeout
      const timeout = replayTimeoutRefs.current[audioId];
      if (timeout) {
        clearTimeout(timeout);
        delete replayTimeoutRefs.current[audioId];
      }
    };
  }, [audioId, audioRefs, replayTimeoutRefs]);

  // Update playing state when currentPlayingId changes
  useEffect(() => {
    const shouldBePlaying = currentPlayingId === audioId;
    if (isPlaying !== shouldBePlaying) {
      setIsPlaying(shouldBePlaying);
      if (!shouldBePlaying && audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [currentPlayingId, audioId, isPlaying]);

  // Sync with parent's qari selection
  useEffect(() => {
    console.log('🔄 [AudioPlayer] Syncing qari selection:', {
      oldQari: selectedQari,
      newQari: defaultQari,
      timestamp: new Date().toISOString()
    });
    setSelectedQari(defaultQari);
  }, [defaultQari, selectedQari]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleLoadStart = () => {
      console.log('📥 [AudioPlayer] Load started:', {
        url: currentAudioUrl,
        qari: selectedQari,
        isIOS,
        timestamp: new Date().toISOString()
      });
      setLoading(true);
      setError(null);
    };
    const handleCanPlay = () => {
      console.log('✅ [AudioPlayer] Can play:', {
        url: currentAudioUrl,
        qari: selectedQari,
        duration: audio.duration,
        readyState: audio.readyState,
        isIOS,
        timestamp: new Date().toISOString()
      });
      setLoading(false);
      setError(null);
    };
    const handleError = (e: Event) => {
      console.error('❌ [AudioPlayer] Audio error:', {
        error: e,
        url: currentAudioUrl,
        qari: selectedQari,
        isPlaying,
        loading,
        isIOS,
        audioUnlocked,
        readyState: audio.readyState,
        networkState: audio.networkState,
        timestamp: new Date().toISOString()
      });
      
      // Don't show error immediately on iOS to prevent phantom errors
      if (!isIOS || isPlaying) {
        console.log('🚨 [AudioPlayer] Showing error to user');
        const errorMsg = isIOS && !audioUnlocked 
          ? 'Tap tombol play untuk memulai audio' 
          : 'Gagal memuat audio. Periksa koneksi internet Anda.';
        setError(errorMsg);
        setLoading(false);
        setCurrentPlaying(null);
      } else {
        console.log('🤐 [AudioPlayer] Suppressing phantom iOS error');
      }
    };
    const handleEnded = () => {
      console.log('🏁 [AudioPlayer] Audio ended:', {
        isReplayEnabled,
        audioId,
        timestamp: new Date().toISOString()
      });
      
      if (isReplayEnabled) {
        console.log('🔄 [AudioPlayer] Setting up replay after 3 seconds');
        // Clear any existing timeout for this audio
        const existingTimeout = replayTimeoutRefs.current[audioId];
        if (existingTimeout) {
          clearTimeout(existingTimeout);
        }
        
        // Set new timeout for replay
        const timeout = setTimeout(() => {
          console.log('🔄 [AudioPlayer] Replaying audio after timeout');
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(error => {
              console.error('❌ [AudioPlayer] Replay failed:', error);
              setCurrentPlaying(null);
            });
          }
          delete replayTimeoutRefs.current[audioId];
        }, 3000); // 3 second delay
        
        replayTimeoutRefs.current[audioId] = timeout;
      } else {
        setCurrentPlaying(null);
      }
    };
    const handleStalled = () => {
      // Only show stalled error if audio was actively playing (not on iOS phantom stalls)
      if (isIOS && isPlaying) {
        setError('Audio terhenti. Coba tap play lagi.');
        setLoading(false);
        setCurrentPlaying(null);
      }
    };
    const handleWaiting = () => {
      console.log('⏳ [AudioPlayer] Audio waiting (buffering):', {
        url: currentAudioUrl,
        qari: selectedQari,
        currentLoading: loading,
        isIOS,
        timestamp: new Date().toISOString()
      });
      if (!loading) {
        console.log('🔄 [AudioPlayer] Setting loading=true due to waiting');
        setLoading(true);
      }
    };
    const handlePlaying = () => {
      console.log('▶️ [AudioPlayer] Audio playing:', {
        url: currentAudioUrl,
        qari: selectedQari,
        duration: audio.duration,
        isIOS,
        timestamp: new Date().toISOString()
      });
      setLoading(false);
      setError(null);
    };

    // Apply audio loading strategy
    const strategy = getAudioLoadingStrategy(isIOS);
    console.log('🔧 [AudioPlayer] Applying audio loading strategy:', {
      strategy,
      isIOS,
      audioElement: audio.tagName,
      timestamp: new Date().toISOString()
    });
    
    Object.entries(strategy).forEach(([key, value]) => {
      if (key === 'preload') {
        audio.preload = value as '' | 'none' | 'metadata' | 'auto';
      } else {
        audio.setAttribute(key, value as string);
      }
    });

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('stalled', handleStalled);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('stalled', handleStalled);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
    };
  }, [currentAudioUrl, isIOS, audioUnlocked, loading]);

  useEffect(() => {
    if (autoPlay && audioRef.current && currentAudioUrl) {
      handlePlay();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, currentAudioUrl]);

  const handlePlay = useCallback(async () => {
    console.log('🎵 [AudioPlayer] Play button clicked:', {
      hasAudioRef: !!audioRef.current,
      currentAudioUrl,
      selectedQari,
      isPlaying,
      loading,
      isIOS,
      audioUnlocked,
      timestamp: new Date().toISOString()
    });
    
    if (!audioRef.current || !currentAudioUrl) {
      console.log('❌ [AudioPlayer] Cannot play - missing audio ref or URL');
      return;
    }
    
    try {
      setError(null);
      
      if (isPlaying) {
        console.log('⏸️ [AudioPlayer] Pausing current audio');
        audioRef.current.pause();
        
        // Clear any pending replay timeout when user manually stops
        const timeout = replayTimeoutRefs.current[audioId];
        if (timeout) {
          console.log('🚫 [AudioPlayer] Clearing pending replay timeout');
          clearTimeout(timeout);
          delete replayTimeoutRefs.current[audioId];
        }
        
        setCurrentPlaying(null);
        return;
      }

      // For iOS, ensure audio is unlocked first
      if (isIOS && !audioUnlocked) {
        console.log('🔓 [AudioPlayer] iOS audio not unlocked, attempting unlock...');
        const unlocked = await unlockAudioiOS();
        if (!unlocked) {
          console.log('❌ [AudioPlayer] iOS audio unlock failed');
          setError('Tap tombol play sekali lagi untuk memulai audio');
          return;
        }
        console.log('✅ [AudioPlayer] iOS audio unlocked successfully');
      }

      console.log('📥 [AudioPlayer] Setting loading=true, starting play process');
      setLoading(true);
      
      // Load the audio if not loaded
      const readyState = audioRef.current.readyState;
      console.log('🔍 [AudioPlayer] Audio ready state:', {
        readyState,
        networkState: audioRef.current.networkState,
        src: audioRef.current.src,
        duration: audioRef.current.duration
      });
      
      if (isIOS) {
        if (audioRef.current.src !== currentAudioUrl) {
          audioRef.current.src = currentAudioUrl;
        }
        audioRef.current.load();
      } else if (readyState === 0) {
        console.log('📥 [AudioPlayer] Audio not loaded, calling load()...');
        audioRef.current.load();
        
        console.log('⏳ [AudioPlayer] Waiting for canplay event...');
        await new Promise((resolve, reject) => {
          const timeoutId = setTimeout(() => {
            console.log('⏰ [AudioPlayer] Canplay timeout after 10s');
            audioRef.current?.removeEventListener('canplay', handleCanPlay);
            audioRef.current?.removeEventListener('error', handleError);
            reject(new Error('Canplay timeout'));
          }, 10000); // 10s timeout
          
          const handleCanPlay = () => {
            console.log('✅ [AudioPlayer] Canplay event received');
            clearTimeout(timeoutId);
            audioRef.current?.removeEventListener('canplay', handleCanPlay);
            audioRef.current?.removeEventListener('error', handleError);
            resolve(void 0);
          };
          const handleError = (e: Event) => {
            console.log('❌ [AudioPlayer] Error during load wait:', e);
            clearTimeout(timeoutId);
            audioRef.current?.removeEventListener('canplay', handleCanPlay);
            audioRef.current?.removeEventListener('error', handleError);
            reject(new Error('Failed to load audio'));
          };
          audioRef.current?.addEventListener('canplay', handleCanPlay);
          audioRef.current?.addEventListener('error', handleError);
        });
      }

      console.log('▶️ [AudioPlayer] Setting current playing and calling play()');
      setCurrentPlaying(audioId);
      
      await audioRef.current.play();
      
      console.log('✅ [AudioPlayer] Play successful, setting loading=false');
      setLoading(false);
      
    } catch (error) {
      console.error('❌ [AudioPlayer] Play error:', {
        error,
        url: currentAudioUrl,
        qari: selectedQari,
        isIOS,
        readyState: audioRef.current?.readyState,
        networkState: audioRef.current?.networkState,
        timestamp: new Date().toISOString()
      });
      
      if (isIOS) {
        const recovered = await forceReloadAudio(currentAudioUrl || undefined);
        if (recovered) return;
      }

      const errorMsg = isIOS
        ? 'Gagal memutar audio. Pastikan tidak ada audio lain yang sedang berjalan.'
        : 'Gagal memutar audio. Periksa koneksi internet Anda.';
      setError(errorMsg);
      setCurrentPlaying(null);
      setLoading(false);
    }
  }, [currentAudioUrl, selectedQari, isPlaying, loading, isIOS, audioUnlocked, unlockAudioiOS, setCurrentPlaying, forceReloadAudio]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeToggle = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleRestart = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
  };

  const handleQariChange = useCallback((qariId: string) => {
    console.log('🎛️ [AudioPlayer] Qari change initiated:', {
      fromQari: selectedQari,
      toQari: qariId,
      wasPlaying: isPlaying,
      timestamp: new Date().toISOString()
    });
    
    const wasPlaying = isPlaying;
    if (isPlaying) {
      console.log('⏸️ [AudioPlayer] Pausing current audio for qari change');
      audioRef.current?.pause();
      setCurrentPlaying(null);
    }
    const nextUrl = getBestAudioUrl(audioSources, qariId);
    setSelectedQari(qariId);
    setCurrentTime(0);
    setDuration(0);
    
    // Notify parent component
    onQariChange?.(qariId);
    
    // Auto-play if was playing before
    if (wasPlaying) {
      if (isIOS) {
        void forceReloadAudio(nextUrl || undefined);
      } else {
        setTimeout(() => {
          handlePlay();
        }, 100);
      }
    }
  }, [audioSources, forceReloadAudio, handlePlay, isIOS, isPlaying, onQariChange, setCurrentPlaying, selectedQari]);

  const handleStartSequentialPlay = () => {
    // Disable replay when starting sequential play
    if (isReplayEnabled) {
      setIsReplayEnabled(false);
    }
    
    setIsSequentialPlaying(true);
    onStartSequentialPlay?.();
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (loading && isIOS) {
      timer = setTimeout(() => setShowResetButton(true), 5000);
    } else {
      setShowResetButton(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [loading, isIOS]);
  const formatTime = (time: number): string => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-4 border-b border-green-200">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-green-800 truncate">{title}</h3>
            {subtitle && (
              <p className="text-green-600 text-sm truncate">{subtitle}</p>
            )}
          </div>
          <Volume2 className="w-5 h-5 text-green-600 flex-shrink-0 ml-3" />
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={currentAudioUrl || ''}
        preload={isIOS ? 'none' : 'metadata'}
        muted={isMuted}
        playsInline={true}
      />

      {/* Section Header for Full Audio */}
      <div className="px-6 py-2 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <Volume2 className="w-4 h-4 text-green-600" />
          <h3 className="text-sm font-semibold text-gray-700">Audio Surat Lengkap</h3>
          <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full border">Satu file audio</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Dengarkan keseluruhan surat dalam satu audio utuh</p>
      </div>

      {/* Player Controls */}
      <div className="p-6 space-y-4">
        {/* Qari Selection */}
        <div className="space-y-2">
          <p className="text-sm text-gray-500 font-medium">Qari</p>
          <SearchableDropdown
            items={Object.entries(QARI_NAMES).map(([id, name]) => ({
              id,
              label: name,
              icon: <Volume2 className="w-4 h-4 text-green-600" />
            }))}
            selectedId={selectedQari}
            onSelect={handleQariChange}
            placeholder="Pilih Qari"
            searchPlaceholder="Cari qari..."
            showSearch={false}
            position="left"
          />
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="relative">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${progressPercentage}%, #e5e7eb ${progressPercentage}%, #e5e7eb 100%)`
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handleRestart}
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Restart"
          >
            <RotateCcw className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={handlePlay}
            disabled={loading || !currentAudioUrl || isSequentialPlaying}
            className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>

          <button
            onClick={handleVolumeToggle}
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-gray-600" />
            ) : (
              <Volume2 className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}
        {showResetButton && isIOS && (
          <button 
            onClick={() => void forceReloadAudio()}
            className="mt-1 text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full border border-orange-200 self-center"
          >
            Audio macet? Tap untuk muat ulang (Khusus iPhone)
          </button>
        )}
      </div>

      {/* Clear Separator Between Full Audio and Per-Verse Mode */}
      {totalAyat && totalAyat > 1 && (
        <>
          {/* Visual Separator */}
          <div className="border-t-4 border-gray-300 mx-6"></div>
          
          {/* Per-Verse Section Header */}
          <div className="px-6 py-3 bg-blue-50 border-b border-blue-200">
            <div className="flex items-center space-x-2">
              <Play className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-semibold text-blue-700">Mode Per Ayat Berurutan</h3>
              <span className="text-xs text-blue-500 bg-white px-2 py-1 rounded-full border border-blue-300">Alternatif</span>
            </div>
            <p className="text-xs text-blue-600 mt-1">Putar setiap ayat secara berurutan dengan scroll otomatis</p>
          </div>

          {/* Sequential Play Button */}
          <div className="px-6 py-4">
            <button
              onClick={handleStartSequentialPlay}
              disabled={loading || !currentAudioUrl || isSequentialPlaying}
              className={`w-full flex items-center justify-center space-x-2 p-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm ${
                isSequentialPlaying 
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white border border-green-700' 
                  : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
              }`}
            >
               <Play className="w-5 h-5" />
               <span>
                 {isSequentialPlaying ? 'Mode per ayat aktif' : 'Mulai putar per ayat berurutan'}
               </span>
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              {isSequentialPlaying 
                ? 'Gunakan tombol stop merah di kanan bawah untuk menghentikan' 
                : 'Audio akan berpindah otomatis dari ayat 1 hingga terakhir'
              }
            </p>
          </div>
        </>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
