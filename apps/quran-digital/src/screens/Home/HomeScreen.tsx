'use client';

import React, { useState, useEffect } from 'react';
import MenuCard from '#/components/MenuCard';
import { getVisibleMenuItems } from '#/constants/menu';
import AppLoading from '#/components/AppLoading';

const HomeScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLocalhost, setIsLocalhost] = useState(false);
  const visibleMenu = getVisibleMenuItems(isLocalhost);

  useEffect(() => {
    try {
      const host = window.location.hostname;
      setIsLocalhost(host === 'localhost' || host === '127.0.0.1');
    } catch {
      setIsLocalhost(false);
    }
  }, []);

  useEffect(() => {
    // Simulate loading tanpa progress bar
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Loading selama 2.5 detik

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <AppLoading
        isLoading={true}
        message="Menyiapkan Qalbyy untuk Anda..."
      />
    );
  }

  return (
    <>
      
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 mb-8 text-white shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">
            السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </h2>
          <h3 className="text-lg font-semibold mb-2">
            Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
          </h3>
          <p className="text-green-100 text-sm leading-relaxed">
            Aplikasi lengkap untuk membantu ibadah dan kehidupan spiritual Anda sehari-hari
          </p>
        </div>
      </div>
      
      {/* Menu Grid */}
      <div className="space-y-6">
        <div className="text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            Pilih Fitur
          </h4>
          <p className="text-gray-600 text-sm">
            Mulai perjalanan spiritual Anda dengan fitur-fitur yang tersedia
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visibleMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        
        
        {/* Footer Info */}
        <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200 text-center">
          <p className="text-sm text-gray-600 mb-2">
            🌟 <strong>Al-Quran</strong> dan <strong>Doa Harian</strong> sudah tersedia
          </p>
          <p className="text-xs text-gray-500">
            Fitur lainnya akan segera hadir untuk melengkapi kebutuhan ibadah Anda
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
