'use client';

import React from 'react';
import Layout from '#/components/Layout';

const DoaScreen: React.FC = () => {
  return (
    <Layout>
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 mb-6 text-white shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">دُعَاءٌ</h2>
          <h3 className="text-lg font-semibold mb-2">Doa Harian</h3>
          <p className="text-green-100 text-sm">
            Kumpulan doa-doa dalam kehidupan sehari-hari
          </p>
        </div>
      </div>
      
      {/* Coming Soon */}
      <div className="text-center py-12">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="text-6xl mb-4">🤲</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Segera Hadir</h3>
          <p className="text-gray-600 leading-relaxed">
            Fitur Doa Harian sedang dalam pengembangan dan akan segera tersedia untuk membantu ibadah harian Anda.
          </p>
          <div className="mt-6">
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DoaScreen;
