'use client';

import React from 'react';

interface AyatLoadingSkeletonProps {
  ayatNumber: number;
}

const AyatLoadingSkeleton: React.FC<AyatLoadingSkeletonProps> = ({ ayatNumber }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-300">
      {/* Ayat Number Header Skeleton */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-3 border-b border-green-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">{ayatNumber}</span>
            </div>
            <span className="text-green-700 font-semibold text-sm">Ayat {ayatNumber}</span>
          </div>
          
          {/* Loading Audio Controls */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-200 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-green-100 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-green-100 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Arabic Text Skeleton */}
        <div className="text-right space-y-3">
          <div className="h-8 bg-gradient-to-r from-green-100 to-green-50 rounded animate-pulse"></div>
          <div className="h-8 bg-gradient-to-r from-green-100 to-green-50 rounded animate-pulse w-4/5 ml-auto"></div>
          <div className="h-8 bg-gradient-to-r from-green-100 to-green-50 rounded animate-pulse w-3/4 ml-auto"></div>
        </div>
        
        {/* Latin Text Skeleton */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="h-4 bg-green-100 rounded animate-pulse"></div>
          <div className="h-4 bg-green-100 rounded animate-pulse w-5/6"></div>
          <div className="h-4 bg-green-100 rounded animate-pulse w-4/5"></div>
        </div>
        
        {/* Translation Skeleton */}
        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 space-y-2">
          <div className="h-4 bg-green-200 rounded animate-pulse"></div>
          <div className="h-4 bg-green-200 rounded animate-pulse w-11/12"></div>
          <div className="h-4 bg-green-200 rounded animate-pulse w-4/5"></div>
          <div className="h-4 bg-green-200 rounded animate-pulse w-3/4"></div>
        </div>
      </div>
      
      {/* Loading indicator */}
      <div className="px-6 pb-4">
        <div className="flex items-center justify-center text-green-600 text-sm">
          <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin mr-2"></div>
          Memuat ayat {ayatNumber}...
        </div>
      </div>
    </div>
  );
};

export default AyatLoadingSkeleton;

