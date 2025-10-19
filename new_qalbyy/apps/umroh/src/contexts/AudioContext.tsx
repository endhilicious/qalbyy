'use client';

import React, { createContext, useContext, useState, useRef } from 'react';

interface AudioContextType {
  currentPlayingId: string | null;
  setCurrentPlaying: (id: string | null) => void;
  stopAllAudio: () => void;
  audioRefs: React.MutableRefObject<Record<string, HTMLAudioElement | null>>;
  isReplayEnabled: boolean;
  setIsReplayEnabled: (enabled: boolean) => void;
  replayTimeoutRefs: React.MutableRefObject<Record<string, NodeJS.Timeout | null>>;

  // Sequential playing functionality
  isSequentialPlaying: boolean;
  setIsSequentialPlaying: (playing: boolean) => void;
  sequentialPlaylist: number[];
  setSequentialPlaylist: (playlist: number[]) => void;
  currentSequentialIndex: number;
  setCurrentSequentialIndex: (index: number) => void;
  onSequentialNext: (() => void) | null;
  setOnSequentialNext: (callback: (() => void) | null) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);
  const [isReplayEnabled, setIsReplayEnabled] = useState(false);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const replayTimeoutRefs = useRef<Record<string, NodeJS.Timeout | null>>({});

  // Sequential playing state
  const [isSequentialPlaying, setIsSequentialPlaying] = useState(false);
  const [sequentialPlaylist, setSequentialPlaylist] = useState<number[]>([]);
  const [currentSequentialIndex, setCurrentSequentialIndex] = useState(0);
  const [onSequentialNext, setOnSequentialNext] = useState<(() => void) | null>(null);

  const setCurrentPlaying = (id: string | null) => {
    console.log('🎵 [AudioContext] Setting current playing:', {
      fromId: currentPlayingId,
      toId: id,
      availableRefs: Object.keys(audioRefs.current),
      timestamp: new Date().toISOString()
    });
    
    // Stop the previously playing audio
    if (currentPlayingId && currentPlayingId !== id && audioRefs.current[currentPlayingId]) {
      console.log('⏸️ [AudioContext] Stopping previous audio:', currentPlayingId);
      audioRefs.current[currentPlayingId]?.pause();
    }
    
    // Clear ALL existing replay timeouts when switching to new audio
    Object.entries(replayTimeoutRefs.current).forEach(([audioId, timeout]) => {
      if (timeout) {
        console.log('🚫 [AudioContext] Clearing replay timeout for:', audioId);
        clearTimeout(timeout);
        delete replayTimeoutRefs.current[audioId];
      }
    });
    
    setCurrentPlayingId(id);
    console.log('✅ [AudioContext] Current playing updated to:', id);
  };

  const stopAllAudio = () => {
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) {
        audio.pause();
      }
    });
    
    // Clear all replay timeouts
    Object.entries(replayTimeoutRefs.current).forEach(([audioId, timeout]) => {
      if (timeout) {
        console.log('🚫 [AudioContext] Clearing replay timeout for:', audioId);
        clearTimeout(timeout);
        delete replayTimeoutRefs.current[audioId];
      }
    });
    
    // Reset sequential playing state when stopping all audio
    if (isSequentialPlaying) {
      setIsSequentialPlaying(false);
      setOnSequentialNext(null);
      setCurrentSequentialIndex(0);
    }
    
    setCurrentPlayingId(null);
  };


  return (
    <AudioContext.Provider value={{
      currentPlayingId,
      setCurrentPlaying,
      stopAllAudio,
      audioRefs,
      isReplayEnabled,
      setIsReplayEnabled,
      replayTimeoutRefs,
      isSequentialPlaying,
      setIsSequentialPlaying,
      sequentialPlaylist,
      setSequentialPlaylist,
      currentSequentialIndex,
      setCurrentSequentialIndex,
      onSequentialNext,
      setOnSequentialNext,
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
