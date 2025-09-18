'use client';

import React, { useState } from 'react';
import { X, Volume2, ChevronDown, List, Hash } from 'lucide-react';

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
  const [showQariDropdown, setShowQariDropdown] = useState(false);
  const [showAyatDropdown, setShowAyatDropdown] = useState(false);
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
                
                <div className="relative">
                  <button
                    onClick={() => setShowQariDropdown(!showQariDropdown)}
                    className="w-full flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <span className="font-medium text-gray-900">{QARI_NAMES[selectedQari]}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${showQariDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showQariDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                      {Object.entries(QARI_NAMES).map(([id, name]) => (
                        <button
                          key={id}
                          onClick={() => {
                            onQariChange(id);
                            setShowQariDropdown(false);
                            onClose(); // Close the entire drawer
                          }}
                          className={`w-full text-left p-3 hover:bg-green-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                            selectedQari === id ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{name}</span>
                            {selectedQari === id && (
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Ayat Navigation Dropdown */}
              {suratInfo && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Hash className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Pilih Ayat</h3>
                  </div>
                  
                  <div className="relative">
                    <button
                      onClick={() => setShowAyatDropdown(!showAyatDropdown)}
                      className="w-full flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <span className="font-medium text-gray-900">Pilih Ayat (1 - {suratInfo.jumlahAyat})</span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${showAyatDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {showAyatDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                        <div className="p-2 border-b border-gray-200">
                          <p className="text-sm text-gray-600 text-center">Scroll untuk melihat semua ayat</p>
                        </div>
                        {Array.from({ length: suratInfo.jumlahAyat }, (_, i) => i + 1).map((ayatNumber) => (
                          <button
                            key={ayatNumber}
                            onClick={() => {
                              onAyatNavigation?.(ayatNumber);
                              setShowAyatDropdown(false);
                              onClose(); // Close drawer after navigation
                            }}
                            className="w-full text-left p-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0 text-gray-700 hover:text-blue-700"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">Ayat {ayatNumber}</span>
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-xs font-bold text-blue-600">{ayatNumber}</span>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

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
