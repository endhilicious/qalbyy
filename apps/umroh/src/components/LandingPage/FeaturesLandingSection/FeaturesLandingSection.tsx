'use client';

import React from 'react';
import { FEATURES } from '#/constants/landingpage';

const FeaturesLandingSection = () => {
  return (
    <section className="py-16 bg-white relative">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Keunggulan yang membuat kami dipercaya ribuan jamaah selama lebih dari dua dekade
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={feature.id} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors relative overflow-hidden">
                  <IconComponent className="w-8 h-8 text-green-600 relative z-10" />
                  {/* Subtle background image */}
                  <div className="absolute inset-0 opacity-5">
                    <img 
                      src={`/umroh-mock-pic/gambar-${(index % 4) + 2}.jpg`} 
                      alt="Feature background" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
        
        {/* Additional trust section with images */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Dipercaya Keluarga Indonesia
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Ribuan keluarga telah mempercayakan perjalanan ibadah mereka kepada kami
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/umroh-mock-pic/gambar-9.jpg", label: "Keluarga Bahagia" },
              { src: "/umroh-mock-pic/gambar-10.jpg", label: "Ibadah Khusyuk" },
              { src: "/umroh-mock-pic/gambar-11.jpg", label: "Perjalanan Aman" },
              { src: "/umroh-mock-pic/gambar-1.jpg", label: "Pengalaman Berkesan" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3 shadow-md">
                  <img 
                    src={item.src} 
                    alt={item.label} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesLandingSection;
