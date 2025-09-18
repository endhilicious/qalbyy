'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, RotateCcw } from 'lucide-react';
import { useAudio } from '#/contexts/AudioContext';

interface AyatAudioPlayerProps {
  audioSources: Record<string, string>;
  ayatNumber: number;
  selectedQari?: string;
  className?: string;
}

const AyatAudioPlayer: React.FC<AyatAudioPlayerProps> = ({
  audioSources,
  ayatNumber,
  selectedQari = '01',
  className = ''
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { currentPlayingId, setCurrentPlaying, audioRefs } = useAudio();
  const audioId = `ayat-${ayatNumber}`;
  
  // Register this audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRefs.current[audioId] = audioRef.current;
    }
    return () => {
      delete audioRefs.current[audioId];
    };
  }, [audioId, audioRefs]);

  // Update playing state when currentPlayingId changes
  useEffect(() => {
    setIsPlaying(currentPlayingId === audioId);
  }, [currentPlayingId, audioId]);

  const currentAudioUrl = audioSources[selectedQari];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadStart = () => setLoading(true);
    const handleCanPlay = () => setLoading(false);
    const handleError = () => {
      setError('Gagal memuat audio');
      setLoading(false);
      setIsPlaying(false);
    };
    const handleEnded = () => setCurrentPlaying(null);

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentAudioUrl]);

  const handlePlay = async () => {
    if (!audioRef.current || !currentAudioUrl) return;
    
    try {
      setError(null);
      if (isPlaying) {
        audioRef.current.pause();
        setCurrentPlaying(null);
      } else {
        setCurrentPlaying(audioId);
        await audioRef.current.play();
      }
    } catch {
      setError('Gagal memutar audio');
      setCurrentPlaying(null);
    }
  };

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
        src={currentAudioUrl}
        preload="metadata"
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
