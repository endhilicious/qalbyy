'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

interface AudioPlayerProps {
  audioSources: Record<string, string>;
  title: string;
  subtitle?: string;
  autoPlay?: boolean;
  className?: string;
  onQariChange?: (qariId: string) => void;
  defaultQari?: string;
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
  defaultQari = '01'
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedQari, setSelectedQari] = useState(defaultQari);
  const [showQariList, setShowQariList] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentAudioUrl = audioSources[selectedQari];

  // Sync with parent's qari selection
  useEffect(() => {
    setSelectedQari(defaultQari);
  }, [defaultQari]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleLoadStart = () => setLoading(true);
    const handleCanPlay = () => setLoading(false);
    const handleError = () => {
      setError('Gagal memuat audio');
      setLoading(false);
      setIsPlaying(false);
    };
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentAudioUrl]);

  useEffect(() => {
    if (autoPlay && audioRef.current && currentAudioUrl) {
      handlePlay();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, currentAudioUrl]);

  const handlePlay = async () => {
    if (!audioRef.current || !currentAudioUrl) return;
    
    try {
      setError(null);
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      setError('Gagal memutar audio');
      setIsPlaying(false);
    }
  };

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

  const handleQariChange = (qariId: string) => {
    const wasPlaying = isPlaying;
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
    
    setSelectedQari(qariId);
    setShowQariList(false);
    setCurrentTime(0);
    setDuration(0);
    
    // Notify parent component
    onQariChange?.(qariId);
    
    // Auto-play if was playing before
    if (wasPlaying) {
      setTimeout(() => {
        handlePlay();
      }, 100);
    }
  };

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
        src={currentAudioUrl}
        preload="metadata"
        muted={isMuted}
      />

      {/* Player Controls */}
      <div className="p-6 space-y-4">
        {/* Qari Selection */}
        <div className="space-y-2">
          <button
            onClick={() => setShowQariList(!showQariList)}
            className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="text-left">
              <p className="text-sm text-gray-500">Qari</p>
              <p className="font-semibold text-gray-900">{QARI_NAMES[selectedQari]}</p>
            </div>
            {showQariList ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {showQariList && (
            <div className="bg-gray-50 rounded-lg p-2 space-y-1">
              {Object.entries(QARI_NAMES).map(([id, name]) => (
                <button
                  key={id}
                  onClick={() => handleQariChange(id)}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    selectedQari === id
                      ? 'bg-green-100 text-green-700 font-semibold'
                      : 'hover:bg-white text-gray-700'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          )}
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
            disabled={loading || !currentAudioUrl}
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
      </div>

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
