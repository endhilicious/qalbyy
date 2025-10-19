'use client';

import React, { useState } from 'react';
import { X, Volume2, List, Hash, RotateCcw } from 'lucide-react';
import { useAudio } from '#/contexts/AudioContext';
import SearchableDropdown from '#/components/SearchableDropdown';

const QARI_NAMES: Record<string, string> = {
  '01': 'Abdullah Al-Juhany',
  '02': 'Abdul Muhsin Al-Qasim',
  '03': 'Abdurrahman as-Sudais',
  '04': 'Ibrahim Al-Dossari',
  '05': 'Misyari Rasyid Al-Afasi',
};

interface QariDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedQari: string;
  onQariChange: (qariId: string) => void;
  onAyatNavigation?: (ayatNumber: number) => void;
  suratInfo?: {
    nama: string;
    namaLatin: string;
    arti: string;
    tempatTurun: string;
    jumlahAyat: number;
  };
}

const QariDrawer: React.FC<QariDrawerProps> = ({
  isOpen,
  onClose,
  selectedQari,
  onQariChange,
  onAyatNavigation,
  suratInfo
}) => {
  const { isReplayEnabled, setIsReplayEnabled, isSequentialPlaying } = useAudio();
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={handleBackdropClick}
        />
      )}
      
      {/* Drawer */}
      <div className={`fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-white to-green-50/30 shadow-xl z-[70] transform transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Pengaturan Audio</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Surah Info */}
            {suratInfo && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{suratInfo.nama}</h3>
                <p className="text-green-100">{suratInfo.namaLatin}</p>
                <p className="text-green-200 text-sm">{suratInfo.arti}</p>
                <div className="flex items-center space-x-4 text-sm text-green-100 pt-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                    <span>{suratInfo.tempatTurun}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                    <span>{suratInfo.jumlahAyat} ayat</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-6">
              
              {/* Qari Selection Dropdown */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Pilih Qari</h3>
                </div>
                
                <SearchableDropdown
                  items={Object.entries(QARI_NAMES).map(([id, name]) => ({
                    id,
                    label: name,
                    icon: <Volume2 className="w-4 h-4 text-green-600" />
                  }))}
                  selectedId={selectedQari}
                  onSelect={(id) => {
                    onQariChange(id);
                    onClose(); // Close the entire drawer
                  }}
                  placeholder="Pilih Qari"
                  searchPlaceholder="Cari qari..."
                  showSearch={true}
                  position="left"
                  className="bg-white border border-gray-300 rounded-lg"
                />
              </div>

              {/* Ayat Navigation Dropdown */}
              {suratInfo && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Hash className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Pilih Ayat</h3>
                  </div>
                  
                  <SearchableDropdown
                    items={Array.from({ length: suratInfo.jumlahAyat }, (_, i) => i + 1).map((ayatNumber) => ({
                      id: ayatNumber.toString(),
                      label: `Ayat ${ayatNumber}`,
                      extra: (
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">{ayatNumber}</span>
                        </div>
                      )
                    }))}
                    selectedId=""
                    onSelect={(id) => {
                      onAyatNavigation?.(parseInt(id));
                      onClose(); // Close drawer after navigation
                    }}
                    placeholder={`Pilih Ayat (1 - ${suratInfo.jumlahAyat})`}
                    searchPlaceholder="Cari nomor ayat..."
                    showSearch={true}
                    position="left"
                    maxHeight="20rem"
                    className="bg-white border border-gray-300 rounded-lg"
                  />
                </div>
              )}

              {/* Replay Settings */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Replay Audio</h3>
                </div>
                
                <div className="bg-white border border-gray-300 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">Auto Replay</p>
                      <p className="text-gray-600 text-sm mt-1">
                        {isSequentialPlaying 
                          ? 'Dinonaktifkan saat mode per ayat aktif' 
                          : 'Audio akan otomatis terulang setelah selesai dengan jeda 3 detik'
                        }
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => setIsReplayEnabled(!isReplayEnabled)}
                        disabled={isSequentialPlaying}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                          isReplayEnabled && !isSequentialPlaying ? 'bg-green-600' : 'bg-gray-300'
                        }`}
                        aria-pressed={isReplayEnabled && !isSequentialPlaying}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            isReplayEnabled && !isSequentialPlaying ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  
                  {/* Sequential Play Status */}
                  {isSequentialPlaying && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-md border border-blue-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <p className="text-blue-700 text-sm font-medium">Mode per ayat aktif</p>
                      </div>
                      <p className="text-blue-600 text-xs">
                        Gunakan tombol stop merah di kanan bawah untuk menghentikan pemutaran berurutan
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Tips */}
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-green-700 text-sm">
                    <strong>Tips Qari:</strong> Pilih qari favorit untuk mendengarkan bacaan Al-Quran dengan suara yang paling nyaman.
                  </p>
                </div>
                
                {suratInfo && (
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-700 text-sm">
                      <strong>Tips Navigasi:</strong> Gunakan pilihan ayat untuk langsung menuju ayat tertentu tanpa perlu scroll panjang.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QariDrawer;
