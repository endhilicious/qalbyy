'use client';

import React from 'react';
import Link from 'next/link';

const CTALandingSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-green-600/90 z-10"></div>
        <img 
          src="/umroh-mock-pic/gambar-11.jpg" 
          alt="Perjalanan Ibadah Berkah" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-4 md:px-6 relative z-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
          Siap Memulai Perjalanan Ibadah Anda?
        </h2>
        <p className="text-green-100 mb-8 text-lg drop-shadow-md leading-relaxed">
          Konsultasi gratis dengan tim kami untuk mendapatkan paket terbaik sesuai kebutuhan dan budget Anda
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Konsultasi Gratis
          </Link>
          <Link 
            href="https://wa.me/6281113567777" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Chat WhatsApp
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-green-100 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>22+ Tahun Pengalaman</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>35,000+ Jamaah Terlayani</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Harga Transparan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTALandingSection;
