'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, BookOpen, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { fetchSuratList } from '#/utils/api';
import type { Surat } from '#/types/alquran';

interface SurahSelectorProps {
  currentSurahId?: number;
  currentSurahName?: string;
}

const SurahSelector: React.FC<SurahSelectorProps> = ({
  currentSurahId,
  currentSurahName
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [surahs, setSurahs] = useState<Surat[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSurahs = async () => {
      if (surahs.length === 0) {
        try {
          setLoading(true);
          const response = await fetchSuratList();
          setSurahs(response.data);
        } catch (error) {
          console.error('Error loading surahs:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (isOpen) {
      loadSurahs();
    }
  }, [isOpen, surahs.length]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredSurahs = surahs.filter(surah =>
    surah.namaLatin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.nama.includes(searchTerm) ||
    surah.nomor.toString().includes(searchTerm)
  );

  const handleSurahSelect = (surahId: number) => {
    router.push(`/alquran/${surahId}`);
    setIsOpen(false);
    setSearchTerm('');
  };

  const displayName = currentSurahName || 'Al-Quran';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors duration-200 text-gray-900"
      >
        <BookOpen className="w-4 h-4 text-green-600" />
        <span className="text-sm font-medium truncate max-w-32">{displayName}</span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden">
          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari surah..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Surah List */}
          <div className="max-h-64 overflow-y-auto">
            {loading ? (
              <div className="p-4 text-center">
                <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-sm text-gray-500 mt-2">Memuat surah...</p>
              </div>
            ) : filteredSurahs.length === 0 ? (
              <div className="p-4 text-center text-gray-500 text-sm">
                {searchTerm ? 'Surah tidak ditemukan' : 'Tidak ada surah'}
              </div>
            ) : (
              filteredSurahs.map((surah) => (
                <button
                  key={surah.nomor}
                  onClick={() => handleSurahSelect(surah.nomor)}
                  className={`w-full px-4 py-3 text-left hover:bg-green-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                    currentSurahId === surah.nomor ? 'bg-green-50 text-green-700' : 'text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                          currentSurahId === surah.nomor 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {surah.nomor}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{surah.namaLatin}</p>
                          <p className="text-xs text-gray-500 truncate">{surah.arti}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right ml-2">
                      <p className="text-lg font-arabic">{surah.nama}</p>
                      <p className="text-xs text-gray-500">{surah.jumlahAyat} ayat</p>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SurahSelector;
