'use client';

import React, { createContext, useContext, useState, useRef } from 'react';

interface AudioContextType {
  currentPlayingId: string | null;
  setCurrentPlaying: (id: string | null) => void;
  stopAllAudio: () => void;
  audioRefs: React.MutableRefObject<Record<string, HTMLAudioElement | null>>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  const setCurrentPlaying = (id: string | null) => {
    // Stop the previously playing audio
    if (currentPlayingId && currentPlayingId !== id && audioRefs.current[currentPlayingId]) {
      audioRefs.current[currentPlayingId]?.pause();
    }
    setCurrentPlayingId(id);
  };

  const stopAllAudio = () => {
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) {
        audio.pause();
      }
    });
    setCurrentPlayingId(null);
  };

  return (
    <AudioContext.Provider value={{
      currentPlayingId,
      setCurrentPlaying,
      stopAllAudio,
      audioRefs
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
