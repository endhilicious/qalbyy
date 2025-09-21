'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { fetchSuratList } from '#/utils/api';
import type { Surat } from '#/types/alquran';
import SearchableDropdown from '#/components/SearchableDropdown';

interface SurahSelectorProps {
  currentSurahId?: number;
  currentSurahName?: string;
}

const SurahSelector: React.FC<SurahSelectorProps> = ({
  currentSurahId,
  currentSurahName
}) => {
  const [surahs, setSurahs] = useState<Surat[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

  const handleSurahSelect = (surahId: string) => {
    router.push(`/alquran/${surahId}`);
  };

  const displayName = currentSurahName || 'Al-Quran';

  const trigger = (
    <div className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors duration-200 text-gray-900">
      <BookOpen className="w-4 h-4 text-green-600" />
      <span className="text-sm font-medium truncate max-w-32">{displayName}</span>
    </div>
  );

  return (
    <SearchableDropdown
      items={surahs.map((surah) => ({
        id: surah.nomor.toString(),
        label: surah.namaLatin,
        description: surah.arti,
        icon: (
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
            currentSurahId === surah.nomor 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {surah.nomor}
          </div>
        ),
        extra: (
          <div className="text-right ml-2">
            <p className="text-lg font-arabic">{surah.nama}</p>
            <p className="text-xs text-gray-500">{surah.jumlahAyat} ayat</p>
          </div>
        )
      }))}
      selectedId={currentSurahId?.toString()}
      onSelect={handleSurahSelect}
      placeholder="Pilih Surah"
      searchPlaceholder="Cari surah..."
      showSearch={true}
      loading={loading}
      position="right"
      trigger={trigger}
      onOpen={loadSurahs}
      dropdownClassName="w-80"
    />
  );
};

export default SurahSelector;
