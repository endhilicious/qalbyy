'use client';

import React, { useState, useEffect } from 'react';
import Layout from '#/components/Layout';
import SuratCard from '#/components/SuratCard';
import LoadingSpinner from '#/components/LoadingSpinner';
import { fetchSuratList } from '#/utils/api';
import type { Surat } from '#/types/alquran';

const AlquranScreen: React.FC = () => {
  const [suratList, setSuratList] = useState<Surat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSuratList = async () => {
      try {
        setLoading(true);
        const response = await fetchSuratList();
        setSuratList(response.data);
      } catch (err) {
        setError('Gagal memuat daftar surat. Silakan coba lagi.');
        console.error('Error loading surat list:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSuratList();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center py-16">
          <LoadingSpinner size="lg" text="Memuat daftar surat Al-Quran..." />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
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
      </Layout>
    );
  }

  return (
    <Layout>
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 mb-6 text-white shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">القُرْآنُ الْكَرِيمُ</h2>
          <h3 className="text-lg font-semibold mb-2">Al-Quran Al-Karim</h3>
          <p className="text-green-100 text-sm">
            114 Surat • Kitab Suci Umat Islam
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="space-y-4">
        <div className="text-center">
          <h4 className="text-lg font-bold text-gray-900 mb-1">
            Daftar Surat
          </h4>
          <p className="text-gray-600 text-sm">
            Pilih surat yang ingin Anda baca dan renungkan
          </p>
        </div>
        
        <div className="space-y-3">
          {suratList.map((surat) => (
            <SuratCard key={surat.nomor} surat={surat} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AlquranScreen;
