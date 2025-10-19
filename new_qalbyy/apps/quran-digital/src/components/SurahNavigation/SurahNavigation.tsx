'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SurahNavigationProps {
  currentSurahId: number;
  isVisible: boolean;
}

const TOTAL_SURAHS = 114;

const SurahNavigation: React.FC<SurahNavigationProps> = ({
  currentSurahId,
  isVisible
}) => {
  const router = useRouter();
  const [isNearBottom, setIsNearBottom] = useState(false);

  // Check if user is near bottom of page
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Consider "near bottom" when within 200px of the bottom
      const isNear = scrollTop + windowHeight >= documentHeight - 200;
      setIsNearBottom(isNear);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || !isNearBottom) return null;

  const hasPrev = currentSurahId > 1;
  const hasNext = currentSurahId < TOTAL_SURAHS;

  const handlePrevSurah = () => {
    if (hasPrev) {
      router.push(`/alquran/${currentSurahId - 1}`);
    }
  };

  const handleNextSurah = () => {
    if (hasNext) {
      router.push(`/alquran/${currentSurahId + 1}`);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-white rounded-full shadow-lg border border-gray-200 px-4 py-3 flex items-center space-x-4">
        {/* Previous Button */}
        <button
          onClick={handlePrevSurah}
          disabled={!hasPrev}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
            hasPrev
              ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md transform hover:scale-105'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          aria-label="Surah sebelumnya"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Prev</span>
        </button>

        {/* Current Surah Info */}
        <div className="px-3 py-1 text-center">
          <p className="text-xs text-gray-500">Surah</p>
          <p className="text-sm font-bold text-gray-900">{currentSurahId} / {TOTAL_SURAHS}</p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNextSurah}
          disabled={!hasNext}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
            hasNext
              ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md transform hover:scale-105'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          aria-label="Surah selanjutnya"
        >
          <span className="text-sm font-medium">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SurahNavigation;
