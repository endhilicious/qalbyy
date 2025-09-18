'use client';

import React, { useState, useEffect } from 'react';
import Layout from '#/components/Layout';
import LoadingSpinner from '#/components/LoadingSpinner';
import AudioPlayer, { AyatAudioPlayer } from '#/components/AudioPlayer';
import FloatingActionButtons from '#/components/FloatingActionButtons';
import QariDrawer from '#/components/QariDrawer';
import SurahNavigation from '#/components/SurahNavigation';
import { AudioProvider } from '#/contexts/AudioContext';
import { fetchSuratDetail } from '#/utils/api';
import type { Ayat } from '#/types/alquran';

interface AlquranDetailScreenProps {
  suratId: number;
}

const AlquranDetailScreen: React.FC<AlquranDetailScreenProps> = ({ suratId }) => {
  const [suratData, setSuratData] = useState<{
    nomor: number;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
    tempatTurun: string;
    arti: string;
    deskripsi: string;
    audioFull: Record<string, string>;
    ayat: Ayat[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedQari, setSelectedQari] = useState('01');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQariDrawerOpen, setIsQariDrawerOpen] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const loadSuratDetail = async () => {
      try {
        setLoading(true);
        const response = await fetchSuratDetail(suratId);
        setSuratData(response.data);
      } catch (err) {
        setError('Gagal memuat detail surat. Silakan coba lagi.');
        console.error('Error loading surat detail:', err);
      } finally {
        setLoading(false);
      }
    };

    if (suratId) {
      loadSuratDetail();
    }
  }, [suratId]);

  const handleQariChange = (qariId: string) => {
    setSelectedQari(qariId);
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setIsScrolled(scrollTop > 200);
      
      // Check if near bottom for navigation
      const isNear = scrollTop + windowHeight >= documentHeight - 200;
      setIsNearBottom(isNear);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQariDrawerToggle = () => {
    setIsQariDrawerOpen(!isQariDrawerOpen);
  };

  const handleAyatNavigation = (ayatNumber: number) => {
    const ayatElement = document.getElementById(`ayat-${ayatNumber}`);
    if (ayatElement) {
      ayatElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'nearest'
      });
      // Add a subtle highlight effect
      ayatElement.classList.add('ring-2', 'ring-blue-400', 'ring-opacity-75');
      setTimeout(() => {
        ayatElement.classList.remove('ring-2', 'ring-blue-400', 'ring-opacity-75');
      }, 2000);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center py-16">
          <LoadingSpinner size="lg" text="Memuat ayat-ayat Al-Quran..." />
        </div>
      </Layout>
    );
  }

  if (error || !suratData) {
    return (
      <Layout>
        <div className="text-center py-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-red-200">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-lg font-bold text-red-600 mb-2">Terjadi Kesalahan</h3>
            <p className="text-red-600 mb-6">{error || 'Data tidak ditemukan'}</p>
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
    <AudioProvider>
      <Layout surahTitle={suratData?.namaLatin} currentSurahId={suratId}>
        
        {/* Header Surat */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 mb-6 text-white shadow-lg">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold">{suratData.nama}</h1>
          <h2 className="text-xl font-semibold">{suratData.namaLatin}</h2>
          <p className="text-green-100 font-medium">{suratData.arti}</p>
          <div className="flex justify-center items-center space-x-6 text-sm text-green-100 pt-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>{suratData.tempatTurun}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>{suratData.jumlahAyat} ayat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Player Surat Lengkap */}
      {suratData.audioFull && Object.keys(suratData.audioFull).length > 0 && (
        <div className="mb-6">
          <AudioPlayer
            audioSources={suratData.audioFull}
            title={`Audio Surat ${suratData.namaLatin}`}
            subtitle="Dengarkan surat lengkap"
            onQariChange={handleQariChange}
            defaultQari={selectedQari}
          />
        </div>
      )}

      {/* Daftar Ayat */}
      <div className="space-y-6 pb-32">
        {suratData.ayat?.map((ayat: Ayat) => (
          <div key={ayat.nomorAyat} id={`ayat-${ayat.nomorAyat}`} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-300">
            {/* Ayat Number Header */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-3 border-b border-green-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-sm">{ayat.nomorAyat}</span>
                  </div>
                  <span className="text-green-700 font-semibold text-sm">Ayat {ayat.nomorAyat}</span>
                </div>
                
                {/* Audio Player per Ayat */}
                {ayat.audio && Object.keys(ayat.audio).length > 0 && (
                  <AyatAudioPlayer
                    audioSources={ayat.audio}
                    ayatNumber={ayat.nomorAyat}
                    selectedQari={selectedQari}
                  />
                )}
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Teks Arab */}
              <div className="text-right">
                <p className="text-3xl leading-loose text-gray-900 font-arabic">
                  {ayat.teksArab}
                </p>
              </div>
              
              {/* Teks Latin */}
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 italic leading-relaxed text-sm">
                  {ayat.teksLatin}
                </p>
              </div>
              
              {/* Terjemahan */}
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-gray-800 leading-relaxed font-medium">
                  {ayat.teksIndonesia}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Buttons */}
      <FloatingActionButtons
        onScrollToTop={handleScrollToTop}
        onQariDrawerToggle={handleQariDrawerToggle}
        isScrolled={isScrolled}
        isNearBottom={isNearBottom}
      />

      {/* Surah Navigation */}
      <SurahNavigation
        currentSurahId={suratId}
        isVisible={true}
      />

      {/* Qari Drawer */}
      <QariDrawer
        isOpen={isQariDrawerOpen}
        onClose={() => setIsQariDrawerOpen(false)}
        selectedQari={selectedQari}
        onQariChange={handleQariChange}
        onAyatNavigation={handleAyatNavigation}
        suratInfo={suratData ? {
          nama: suratData.nama,
          namaLatin: suratData.namaLatin,
          arti: suratData.arti,
          tempatTurun: suratData.tempatTurun,
          jumlahAyat: suratData.jumlahAyat
        } : undefined}
      />
      </Layout>
    </AudioProvider>
  );
};

export default AlquranDetailScreen;
