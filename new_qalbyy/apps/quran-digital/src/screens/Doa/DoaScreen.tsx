'use client';

import React, { useState, useEffect } from 'react';
import DoaCard from '#/components/DoaCard';
import LoadingSpinner from '#/components/LoadingSpinner';
import { fetchDoaList } from '#/utils/api';
import type { Doa } from '#/types/doa';

const DoaScreen: React.FC = () => {
  const [doaList, setDoaList] = useState<Doa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDoaList = async () => {
      try {
        setLoading(true);
        const response = await fetchDoaList();
        setDoaList(response.data);
      } catch (err) {
        setError('Gagal memuat daftar doa. Silakan coba lagi.');
        console.error('Error loading doa list:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDoaList();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <LoadingSpinner size="lg" text="Memuat daftar doa harian..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-red-200">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-lg font-bold text-red-600 mb-2">Terjadi Kesalahan</h3>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-white shadow-lg">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">دُعَاءٌ</h2>
          <h3 className="text-base sm:text-lg font-semibold mb-2">Doa Harian</h3>
          <p className="text-green-100 text-xs sm:text-sm">
            {doaList.length} Doa • Kumpulan doa-doa dalam kehidupan sehari-hari
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="space-y-3 sm:space-y-4">
        <div className="text-center">
          <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
            Daftar Doa
          </h4>
          <p className="text-gray-600 text-xs sm:text-sm">
            Pilih doa yang ingin Anda baca dan amalkan
          </p>
        </div>
        
        <div className="space-y-2 sm:space-y-3">
          {doaList.map((doa) => (
            <DoaCard key={doa.id} doa={doa} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DoaScreen;
