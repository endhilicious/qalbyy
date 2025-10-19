import React from 'react';
import Link from 'next/link';
import { ChevronRight, BookOpen } from 'lucide-react';
import type { Doa } from '#/types/doa';

interface DoaCardProps {
  doa: Doa;
}

const DoaCard: React.FC<DoaCardProps> = ({ doa }) => {
  return (
    <Link href={`/doa/${doa.id}`} className="block">
      <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 hover:shadow-lg hover:border-green-300 transition-all duration-300 transform hover:scale-[1.02] group">
        <div className="flex items-start space-x-3 sm:space-x-4">
          {/* Icon Badge */}
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title and Arabic Text - Mobile First Layout */}
            <div className="space-y-2">
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg truncate group-hover:text-green-700 transition-colors">
                  {doa.nama}
                </h3>
                <p className="text-green-600 font-medium text-xs sm:text-sm mt-1">{doa.grup}</p>
              </div>
              
              {/* Arabic Text - Full width on mobile, right-aligned on desktop */}
              <div className="text-right">
                <div className="text-lg sm:text-xl lg:text-2xl font-arabic text-gray-700 leading-tight line-clamp-2">
                  {doa.ar}
                </div>
              </div>
            </div>
            
            {/* Meta Info - Improved mobile layout */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mt-3">
              <div className="flex flex-wrap gap-1">
                {doa.tag.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium text-xs">
                    {tag}
                  </span>
                ))}
                {doa.tag.length > 3 && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium text-xs">
                    +{doa.tag.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex-shrink-0 pt-1">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DoaCard;
