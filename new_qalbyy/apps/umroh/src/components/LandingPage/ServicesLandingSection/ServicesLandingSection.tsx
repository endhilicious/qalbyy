'use client';

import React from 'react';
import Link from 'next/link';
import { SERVICES } from '#/constants/landingpage';

const ServicesLandingSection = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/umroh-mock-pic/gambar-10.jpg" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Pilih layanan yang sesuai dengan kebutuhan perjalanan ibadah Anda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Link key={service.id} href={service.href}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors relative overflow-hidden">
                      <IconComponent className="w-8 h-8 text-green-600 relative z-10" />
                      {/* Small background image for each service card */}
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                        <img 
                          src={`/umroh-mock-pic/gambar-${(index % 4) + 5}.jpg`} 
                          alt="Service background" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {service.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesLandingSection;
