'use client';

import React, { useState, useEffect, useCallback } from 'react';
import LoadingSpinner from '#/components/LoadingSpinner';
import AudioPlayer, { AyatAudioPlayer } from '#/components/AudioPlayer';
import FloatingActionButtons from '#/components/FloatingActionButtons';
import QariDrawer from '#/components/QariDrawer';
import SurahNavigation from '#/components/SurahNavigation';
import { AyatLoadingSkeleton } from '#/components/LoadingSkeleton';
import { AudioProvider, useAudio } from '#/contexts/AudioContext';
import { fetchSuratDetail } from '#/utils/api';
import type { Ayat } from '#/types/alquran';

interface AlquranDetailScreenProps {
  suratId: number;
}

const AlquranDetailContent: React.FC<AlquranDetailScreenProps> = ({ suratId }) => {
  const { 
    currentPlayingId, 
    isSequentialPlaying, 
    setIsSequentialPlaying,
    setSequentialPlaylist,
    setCurrentSequentialIndex,
    setOnSequentialNext,
    setIsReplayEnabled,
    stopAllAudio
  } = useAudio();
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
  const [selectedQari, setSelectedQari] = useState('05');
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQariDrawerOpen, setIsQariDrawerOpen] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);
  const [ayatLoadingStates, setAyatLoadingStates] = useState<Record<number, boolean>>({});
  const [allAyatLoaded, setAllAyatLoaded] = useState(false);

  // Show all ayat immediately when data is available (not waiting for audio)
  useEffect(() => {
    if (suratData?.ayat && suratData.ayat.length > 0) {
      // Mark all ayat as loaded immediately when data is available
      setAllAyatLoaded(true);
    }
  }, [suratData?.ayat]);

  // Handle ayat audio loaded (for audio controls, not skeleton)
  const handleAyatLoaded = (ayatNumber: number) => {
    setAyatLoadingStates(prev => ({
      ...prev,
      [ayatNumber]: true
    }));
  };

  useEffect(() => {
    const loadSuratDetail = async () => {
      try {
        setLoading(true);
        setAllAyatLoaded(false); // Reset skeleton state
        
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

  const handleAyatNavigation = (ayatNumber: number, forceScroll: boolean = false) => {
    const ayatElement = document.getElementById(`ayat-${ayatNumber}`);
    if (ayatElement) {
      const getHeaderOffset = () => {
        try {
          const val = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
          const num = parseInt(val.replace('px', '').trim(), 10);
          return Number.isFinite(num) && num > 0 ? num : 80;
        } catch {
          return 80;
        }
      };

      if (forceScroll) {
        // For sequential play, force scroll to top of viewport
        const elementTop = ayatElement.offsetTop;
        const headerOffset = getHeaderOffset();
        window.scrollTo({
          top: elementTop - headerOffset,
          behavior: 'smooth'
        });
      } else {
        // Normal navigation
        ayatElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
      }

      // Add a subtle highlight effect
      ayatElement.classList.add('ring-2', 'ring-blue-400', 'ring-opacity-75');
      setTimeout(() => {
        ayatElement.classList.remove('ring-2', 'ring-blue-400', 'ring-opacity-75');
      }, 2000);
    }
  };

  const handleStartSequentialPlay = useCallback(() => {
    if (!suratData?.ayat) return;
    
    // Disable replay when starting sequential play
    setIsReplayEnabled(false);
    
    // Set up playlist and start from first ayat
    const playlist = suratData.ayat.map(ayat => ayat.nomorAyat);
    setSequentialPlaylist(playlist);
    let currentIndex = 0;
    setCurrentSequentialIndex(currentIndex);
    setIsSequentialPlaying(true);
    
    // Set up the sequential next callback
    setOnSequentialNext(() => () => {
      currentIndex += 1;
      if (currentIndex < playlist.length) {
          // Navigate to next ayat
          const nextAyatNumber = playlist[currentIndex];
          setCurrentSequentialIndex(currentIndex);
          handleAyatNavigation(nextAyatNumber, true); // Force scroll for sequential
        
        // Play the next ayat audio
        setTimeout(() => {
          const nextAyatAudioButton = document.querySelector(`#ayat-${nextAyatNumber} button[aria-label*="Play ayat ${nextAyatNumber}"]`) as HTMLButtonElement;
          if (nextAyatAudioButton) {
            nextAyatAudioButton.click();
          }
        }, 500); // Small delay to ensure smooth scrolling completes
      } else {
        // End of playlist
        setIsSequentialPlaying(false);
        setOnSequentialNext(null);
        setCurrentSequentialIndex(0);
      }
    });
    
    // SPECIAL HANDLING: Force scroll to first ayat ONLY (not affecting other ayat scrolling)
    console.log(`🚀 Starting sequential play, forcing scroll to first ayat: ${playlist[0]}`);
    
    // Direct immediate scroll to top for first ayat only
    const firstAyatElement = document.getElementById(`ayat-${playlist[0]}`);
    if (firstAyatElement) {
      // Method 1: Scroll to very top of document first
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
      
      // Method 2: Then scroll to first ayat position
      setTimeout(() => {
        const elementTop = firstAyatElement.offsetTop;
        window.scrollTo({
          top: Math.max(0, elementTop - 80),
          behavior: 'smooth'
        });
        console.log(`🎯 Scrolled to first ayat position: ${elementTop - 80}`);
      }, 100);
    }
    
    setTimeout(() => {
      const firstAyatAudioButton = document.querySelector(`#ayat-${playlist[0]} button[aria-label*="Play ayat ${playlist[0]}"]`) as HTMLButtonElement;
      if (firstAyatAudioButton) {
        console.log(`▶️ Starting audio for first ayat: ${playlist[0]}`);
        firstAyatAudioButton.click();
      } else {
        console.log(`❌ Could not find audio button for ayat ${playlist[0]}`);
      }
    }, 800);
  }, [suratData, setIsReplayEnabled, setSequentialPlaylist, setCurrentSequentialIndex, setIsSequentialPlaying, setOnSequentialNext, handleAyatNavigation]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <LoadingSpinner size="lg" text="Memuat ayat-ayat Al-Quran..." />
      </div>
    );
  }

  if (error || !suratData) {
    return (
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
    );
  }

  return (
    <>
        
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
        <div className={`mb-6 rounded-xl transition-all duration-300 ${
          currentPlayingId === 'full-surat-player' ? 'bg-green-50 p-1' : ''
        }`}>
          <AudioPlayer
            audioSources={suratData.audioFull}
            title={`Audio Surat ${suratData.namaLatin}`}
            subtitle="Dengarkan surat lengkap"
            onQariChange={handleQariChange}
            defaultQari={selectedQari}
            totalAyat={suratData.jumlahAyat}
            onStartSequentialPlay={handleStartSequentialPlay}
          />
        </div>
      )}

      {/* Daftar Ayat */}
      <div className="space-y-6 pb-32">
        {suratData.ayat?.map((ayat: Ayat) => {
          // Show skeleton only while waiting for initial data load
          if (!allAyatLoaded) {
            return (
              <AyatLoadingSkeleton 
                key={ayat.nomorAyat} 
                ayatNumber={ayat.nomorAyat} 
              />
            );
          }
          
          return (
            <div key={ayat.nomorAyat} id={`ayat-${ayat.nomorAyat}`} className={`bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-300 ${
              currentPlayingId === `ayat-${ayat.nomorAyat}` ? 'bg-green-50 border-green-300 shadow-md' : ''
            }`}>
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
                      onAudioLoaded={() => handleAyatLoaded(ayat.nomorAyat)}
                    />
                  )}
                </div>
              </div>
            
            <div className="p-6 space-y-6">
              {/* Teks Arab */}
              <div className="text-right">
                <p className={`text-3xl leading-loose font-arabic transition-colors duration-300 ${
                  currentPlayingId === `ayat-${ayat.nomorAyat}` ? 'text-green-700' : 'text-gray-900'
                }`}>
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
        );
        })}
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
      </>
  );
};

const AlquranDetailScreen: React.FC<AlquranDetailScreenProps> = ({ suratId }) => {
  return (
    <AudioProvider>
      <AlquranDetailContent suratId={suratId} />
    </AudioProvider>
  );
};

export default AlquranDetailScreen;
