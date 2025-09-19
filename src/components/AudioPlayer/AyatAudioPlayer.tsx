'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Play, Pause, Volume2, RotateCcw } from 'lucide-react';
import { useAudio } from '#/contexts/AudioContext';
import { getBestAudioUrl, getAudioLoadingStrategy } from '#/utils/audioUtils';

interface AyatAudioPlayerProps {
  audioSources: Record<string, string>;
  ayatNumber: number;
  selectedQari?: string;
  className?: string;
  onAudioLoaded?: () => void;
}

const AyatAudioPlayer: React.FC<AyatAudioPlayerProps> = ({
  audioSources,
  ayatNumber,
  selectedQari = '01',
  className = '',
  onAudioLoaded
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  
  const { currentPlayingId, setCurrentPlaying, audioRefs, isReplayEnabled, replayTimeoutRefs } = useAudio();
  const audioId = `ayat-${ayatNumber}`;
  
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
    setIsPlaying(currentPlayingId === audioId);
  }, [currentPlayingId, audioId]);

  // Memoize audio URL to prevent infinite re-renders
  const currentAudioUrl = useMemo(() => {
    const url = getBestAudioUrl(audioSources, selectedQari);
    console.log('🎵 [AyatAudioPlayer] URL Memoized for Ayat', ayatNumber, ':', {
      selectedQari,
      url,
      timestamp: new Date().toISOString()
    });
    return url;
  }, [audioSources, selectedQari, ayatNumber]);

  // Reset error state when URL changes (surah navigation)
  useEffect(() => {
    console.log('🔄 [AyatAudioPlayer] Resetting state for Ayat', ayatNumber, ':', currentAudioUrl);
    setError(null);
    setLoading(false);
  }, [currentAudioUrl, ayatNumber]);

  // Detect iOS
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent) || 
                       (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(isIOSDevice);
  }, []);

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadStart = () => {
      setLoading(true);
      setError(null);
    };
      const handleCanPlay = () => {
        setLoading(false);
        setError(null);
        // Notify parent that this ayat audio is ready (optional callback)
        onAudioLoaded?.();
      };
    const handleError = (e: Event) => {
      console.error('Audio error:', e);
      // Don't show error immediately on iOS to prevent phantom errors
      if (!isIOS || isPlaying) {
        const errorMsg = isIOS && !audioUnlocked 
          ? 'Tap untuk memutar' 
          : 'Gagal memuat audio';
        setError(errorMsg);
        setLoading(false);
        setCurrentPlaying(null);
      }
    };
    const handleEnded = () => {
      console.log('🏁 [AyatAudioPlayer] Audio ended for Ayat', ayatNumber, ':', {
        isReplayEnabled,
        audioId,
        timestamp: new Date().toISOString()
      });
      
      if (isReplayEnabled) {
        console.log('🔄 [AyatAudioPlayer] Setting up replay after 3 seconds for Ayat', ayatNumber);
        // Clear any existing timeout for this audio
        const existingTimeout = replayTimeoutRefs.current[audioId];
        if (existingTimeout) {
          clearTimeout(existingTimeout);
        }
        
        // Set new timeout for replay
        const timeout = setTimeout(() => {
          console.log('🔄 [AyatAudioPlayer] Replaying audio after timeout for Ayat', ayatNumber);
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(error => {
              console.error('❌ [AyatAudioPlayer] Replay failed for Ayat', ayatNumber, ':', error);
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
        setError('Audio terhenti');
        setLoading(false);
        setCurrentPlaying(null);
      }
    };
    const handleWaiting = () => {
      if (!loading) setLoading(true);
    };
    const handlePlaying = () => {
      setLoading(false);
      setError(null);
    };

    // Apply audio loading strategy
    const strategy = getAudioLoadingStrategy(isIOS);
    Object.entries(strategy).forEach(([key, value]) => {
      if (key === 'preload') {
        audio.preload = value as '' | 'none' | 'metadata' | 'auto';
      } else {
        audio.setAttribute(key, value as string);
      }
    });

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('stalled', handleStalled);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('stalled', handleStalled);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
    };
  }, [currentAudioUrl, setCurrentPlaying, isIOS, audioUnlocked, loading]);

  const handlePlay = useCallback(async () => {
    console.log('🎵 [AyatAudioPlayer] Play clicked for Ayat', ayatNumber, ':', {
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
      console.log('❌ [AyatAudioPlayer] Cannot play Ayat', ayatNumber, '- missing audio ref or URL');
      return;
    }
    
    try {
      setError(null);
      
      if (isPlaying) {
        console.log('⏸️ [AyatAudioPlayer] Pausing Ayat', ayatNumber);
        audioRef.current.pause();
        
        // Clear any pending replay timeout when user manually stops
        const timeout = replayTimeoutRefs.current[audioId];
        if (timeout) {
          console.log('🚫 [AyatAudioPlayer] Clearing pending replay timeout for Ayat', ayatNumber);
          clearTimeout(timeout);
          delete replayTimeoutRefs.current[audioId];
        }
        
        setCurrentPlaying(null);
        return;
      }

      // For iOS, ensure audio is unlocked first
      if (isIOS && !audioUnlocked) {
        console.log('🔓 [AyatAudioPlayer] iOS unlock needed for Ayat', ayatNumber);
        const unlocked = await unlockAudioiOS();
        if (!unlocked) {
          console.log('❌ [AyatAudioPlayer] iOS unlock failed for Ayat', ayatNumber);
          setError('Tap lagi untuk memutar');
          return;
        }
        console.log('✅ [AyatAudioPlayer] iOS unlocked for Ayat', ayatNumber);
      }

      console.log('📥 [AyatAudioPlayer] Setting loading=true for Ayat', ayatNumber);
      setLoading(true);
      
      // Load the audio if not loaded
      const readyState = audioRef.current.readyState;
      console.log('🔍 [AyatAudioPlayer] Ready state for Ayat', ayatNumber, ':', {
        readyState,
        networkState: audioRef.current.networkState,
        src: audioRef.current.src
      });
      
      if (readyState === 0) {
        console.log('📥 [AyatAudioPlayer] Loading audio for Ayat', ayatNumber);
        audioRef.current.load();
        
        console.log('⏳ [AyatAudioPlayer] Waiting for canplay for Ayat', ayatNumber);
        await new Promise((resolve, reject) => {
          const timeoutId = setTimeout(() => {
            console.log('⏰ [AyatAudioPlayer] Canplay timeout for Ayat', ayatNumber);
            audioRef.current?.removeEventListener('canplay', handleCanPlay);
            audioRef.current?.removeEventListener('error', handleError);
            reject(new Error('Canplay timeout'));
          }, 10000);
          
          const handleCanPlay = () => {
            console.log('✅ [AyatAudioPlayer] Canplay received for Ayat', ayatNumber);
            clearTimeout(timeoutId);
            audioRef.current?.removeEventListener('canplay', handleCanPlay);
            audioRef.current?.removeEventListener('error', handleError);
            resolve(void 0);
          };
          const handleError = (e: Event) => {
            console.log('❌ [AyatAudioPlayer] Load error for Ayat', ayatNumber, ':', e);
            clearTimeout(timeoutId);
            audioRef.current?.removeEventListener('canplay', handleCanPlay);
            audioRef.current?.removeEventListener('error', handleError);
            reject(new Error('Failed to load audio'));
          };
          audioRef.current?.addEventListener('canplay', handleCanPlay);
          audioRef.current?.addEventListener('error', handleError);
        });
      }

      console.log('▶️ [AyatAudioPlayer] Playing Ayat', ayatNumber);
      setCurrentPlaying(audioId);
      await audioRef.current.play();
      
      console.log('✅ [AyatAudioPlayer] Play successful for Ayat', ayatNumber);
      setLoading(false);
      
    } catch (error) {
      console.error('❌ [AyatAudioPlayer] Play error for Ayat', ayatNumber, ':', {
        error,
        url: currentAudioUrl,
        qari: selectedQari,
        isIOS,
        timestamp: new Date().toISOString()
      });
      
      const errorMsg = isIOS 
        ? 'Gagal memutar. Coba lagi.' 
        : 'Gagal memutar audio';
      setError(errorMsg);
      setCurrentPlaying(null);
      setLoading(false);
    }
  }, [ayatNumber, currentAudioUrl, selectedQari, isPlaying, loading, isIOS, audioUnlocked, unlockAudioiOS, setCurrentPlaying, audioId]);

  const handleRestart = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  if (!currentAudioUrl) {
    return null;
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={currentAudioUrl || ''}
        preload={isIOS ? 'none' : 'metadata'}
        playsInline={true}
      />

      {/* Play/Pause Button */}
      <button
        onClick={handlePlay}
        disabled={loading}
        className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        aria-label={isPlaying ? `Pause ayat ${ayatNumber}` : `Play ayat ${ayatNumber}`}
      >
        {loading ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4 ml-0.5" />
        )}
      </button>

      {/* Restart Button */}
      <button
        onClick={handleRestart}
        className="w-8 h-8 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
        aria-label={`Restart ayat ${ayatNumber}`}
      >
        <RotateCcw className="w-4 h-4 text-gray-500" />
      </button>

      {/* Audio Icon */}
      <Volume2 className="w-4 h-4 text-gray-400" />

      {/* Error Message */}
      {error && (
        <span className="text-red-500 text-xs">{error}</span>
      )}
    </div>
  );
};

export default AyatAudioPlayer;
