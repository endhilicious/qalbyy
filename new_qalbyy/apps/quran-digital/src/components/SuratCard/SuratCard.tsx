import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Surat } from '#/types/alquran';

interface SuratCardProps {
  surat: Surat;
}

const SuratCard: React.FC<SuratCardProps> = ({ surat }) => {
  return (
    <Link href={`/alquran/${surat.nomor}`} className="block">
      <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg hover:border-green-300 transition-all duration-300 transform hover:scale-[1.02] group">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center space-x-4 flex-1">
            {/* Number Badge */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">{surat.nomor}</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg truncate group-hover:text-green-700 transition-colors">
                    {surat.namaLatin}
                  </h3>
                  <p className="text-green-600 font-medium text-sm">{surat.arti}</p>
                </div>
                <div className="text-right ml-4 flex-shrink-0">
                  <div className="text-2xl font-arabic text-gray-700 mb-1 leading-none">{surat.nama}</div>
                </div>
              </div>
              
              {/* Meta Info */}
              <div className="flex items-center space-x-3 text-xs text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded-full">{surat.tempatTurun}</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  {surat.jumlahAyat} ayat
                </span>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="ml-4 flex-shrink-0">
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuratCard;
