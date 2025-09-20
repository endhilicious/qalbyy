'use client';

import React, { useState, useEffect } from 'react';
import Layout from '#/components/Layout';
import LoadingSpinner from '#/components/LoadingSpinner';
import { fetchDoaDetail } from '#/utils/api';
import type { Doa } from '#/types/doa';
import { BookOpen, Copy, Check } from 'lucide-react';

interface DoaDetailScreenProps {
  doaId: number;
}

const DoaDetailScreen: React.FC<DoaDetailScreenProps> = ({ doaId }) => {
  const [doaData, setDoaData] = useState<Doa | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const loadDoaDetail = async () => {
      try {
        setLoading(true);
        console.log('📥 [DoaDetailScreen] Loading doa data for ID:', doaId);
        
        const response = await fetchDoaDetail(doaId);
        setDoaData(response.data);
        
        console.log('✅ [DoaDetailScreen] Doa data loaded successfully:', {
          doaId,
          doaName: response.data?.nama,
          timestamp: new Date().toISOString()
        });
      } catch (err) {
        setError('Gagal memuat detail doa. Silakan coba lagi.');
        console.error('Error loading doa detail:', err);
      } finally {
        setLoading(false);
      }
    };

    if (doaId) {
      loadDoaDetail();
    }
  }, [doaId]);

  const handleCopyText = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center py-16">
          <LoadingSpinner size="lg" text="Memuat detail doa..." />
        </div>
      </Layout>
    );
  }

  if (error || !doaData) {
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
    <Layout>
      
      {/* Header Doa */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-white shadow-lg">
        <div className="text-center space-y-2 sm:space-y-3">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-3 sm:mb-4">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-0 sm:mr-3" />
            <h1 className="text-lg sm:text-2xl font-bold text-center">{doaData.nama}</h1>
          </div>
          <p className="text-green-100 font-medium text-sm sm:text-base">{doaData.grup}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-green-100 pt-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>{doaData.tag.length} tag</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>Doa Harian</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 sm:space-y-6">
        
        {/* Teks Arab */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-green-50 to-green-100 px-4 sm:px-6 py-2 sm:py-3 border-b border-green-200">
            <h3 className="text-green-700 font-semibold text-xs sm:text-sm flex items-center">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Teks Arab
            </h3>
          </div>
          <div className="p-4 sm:p-6">
            <div className="text-right">
              <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed sm:leading-loose text-gray-900 font-arabic mb-3 sm:mb-4">
                {doaData.ar}
              </p>
            </div>
            <button
              onClick={() => handleCopyText(doaData.ar, 'arab')}
              className="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {copiedText === 'arab' ? (
                <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-600" />
              ) : (
                <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              )}
              {copiedText === 'arab' ? 'Tersalin!' : 'Salin'}
            </button>
          </div>
        </div>

        {/* Transliterasi */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-200">
            <h3 className="text-gray-700 font-semibold text-xs sm:text-sm flex items-center">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Transliterasi
            </h3>
          </div>
          <div className="p-4 sm:p-6">
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
              <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base lg:text-lg">
                {doaData.tr}
              </p>
            </div>
            <button
              onClick={() => handleCopyText(doaData.tr, 'transliterasi')}
              className="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {copiedText === 'transliterasi' ? (
                <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-600" />
              ) : (
                <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              )}
              {copiedText === 'transliterasi' ? 'Tersalin!' : 'Salin'}
            </button>
          </div>
        </div>

        {/* Terjemahan */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-green-50 to-green-100 px-4 sm:px-6 py-2 sm:py-3 border-b border-green-200">
            <h3 className="text-green-700 font-semibold text-xs sm:text-sm flex items-center">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Terjemahan
            </h3>
          </div>
          <div className="p-4 sm:p-6">
            <div className="bg-green-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border-l-4 border-green-500">
              <p className="text-gray-800 leading-relaxed font-medium text-sm sm:text-base lg:text-lg">
                {doaData.idn}
              </p>
            </div>
            <button
              onClick={() => handleCopyText(doaData.idn, 'terjemahan')}
              className="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {copiedText === 'terjemahan' ? (
                <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-600" />
              ) : (
                <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              )}
              {copiedText === 'terjemahan' ? 'Tersalin!' : 'Salin'}
            </button>
          </div>
        </div>

        {/* Referensi */}
        {doaData.tentang && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 sm:px-6 py-2 sm:py-3 border-b border-blue-200">
              <h3 className="text-blue-700 font-semibold text-xs sm:text-sm flex items-center">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Referensi & Penjelasan
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border-l-4 border-blue-500">
                <div className="prose prose-sm max-w-none">
                  {doaData.tentang.split('\n').map((line, index) => (
                    <p key={index} className="text-gray-800 leading-relaxed mb-2 last:mb-0 text-xs sm:text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleCopyText(doaData.tentang, 'referensi')}
                className="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {copiedText === 'referensi' ? (
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-600" />
                ) : (
                  <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                )}
                {copiedText === 'referensi' ? 'Tersalin!' : 'Salin'}
              </button>
            </div>
          </div>
        )}

        {/* Tags */}
        {doaData.tag && doaData.tag.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 px-4 sm:px-6 py-2 sm:py-3 border-b border-purple-200">
              <h3 className="text-purple-700 font-semibold text-xs sm:text-sm flex items-center">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Kategori & Tag
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap gap-2">
                {doaData.tag.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-4 sm:px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Kembali ke Daftar Doa
          </button>
          <button
            onClick={() => window.location.href = '/doa'}
            className="px-4 sm:px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Lihat Semua Doa
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DoaDetailScreen;
