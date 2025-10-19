'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp, Settings, Square } from 'lucide-react';
import { useAudio } from '#/contexts/AudioContext';

interface FloatingActionButtonsProps {
  onScrollToTop: () => void;
  onQariDrawerToggle: () => void;
  isScrolled: boolean;
  bottomOffset?: number;
  isNearBottom?: boolean;
}

const FloatingActionButtons: React.FC<FloatingActionButtonsProps> = ({
  onScrollToTop,
  onQariDrawerToggle,
  isScrolled,
  bottomOffset = 24,
  isNearBottom = false
}) => {
  const { 
    isSequentialPlaying, 
    setIsSequentialPlaying, 
    setOnSequentialNext, 
    stopAllAudio 
  } = useAudio();

  const handleStopSequentialPlay = () => {
    // Stop all audio
    stopAllAudio();
    
    // Clear sequential playing state
    setIsSequentialPlaying(false);
    setOnSequentialNext(null);
    
    console.log('🛑 Sequential playback stopped by user');
  };

  // Adjust bottom position when near bottom to make room for navigation
  const adjustedBottomOffset = isNearBottom ? bottomOffset + 80 : bottomOffset;

  return (
    <div 
      className="fixed z-50 transition-all duration-300"
      style={{ 
        bottom: `${adjustedBottomOffset}px`,
        left: '24px',
        right: '24px'
      }}
    >
      <div className="flex justify-between items-end">
        {/* Scroll to Top Button - Left (only when scrolled) */}
        {isScrolled && (
          <button
            onClick={onScrollToTop}
            className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}

        {/* Spacer when scroll button is not visible */}
        {!isScrolled && <div></div>}

        {/* Stop Sequential Play Button - Center (only when sequential playing) */}
        {isSequentialPlaying && (
          <button
            onClick={handleStopSequentialPlay}
            className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
            aria-label="Stop sequential playback"
          >
            <Square className="w-6 h-6 fill-current" />
          </button>
        )}

        {/* Qari Selector Button - Right (always visible) */}
        <button
          onClick={onQariDrawerToggle}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          aria-label="Qari settings"
        >
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default FloatingActionButtons;
