'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroLandingSection = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/umroh-mock-pic/gambar-1.jpg" 
          alt="Kaaba dan Masjidil Haram" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Solusi Terpercaya untuk<br />
            <span className="text-green-400">Perjalanan Ibadah</span> Anda
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            22+ tahun pengalaman melayani 35,000+ jamaah dengan pelayanan terbaik, 
            harga transparan, dan jadwal pasti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/umroh" 
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Lihat Paket Umroh
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/haji" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/90 text-green-600 font-semibold rounded-xl border-2 border-white hover:bg-white transition-colors text-lg shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Paket Haji Syariah
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLandingSection;
