'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryLandingSection = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, title: string} | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images data
  const galleryImages = [
    { src: "/umroh-mock-pic/gambar-2.jpg", alt: "Jamaah di Masjidil Haram", title: "Masjidil Haram", description: "Suasana ibadah yang khusyuk" },
    { src: "/umroh-mock-pic/gambar-3.jpg", alt: "Jamaah di Madinah", title: "Masjid Nabawi", description: "Ziarah di Masjid Nabawi" },
    { src: "/umroh-mock-pic/gambar-4.jpg", alt: "Perjalanan Umroh", title: "Perjalanan Berkah", description: "Momen berkesan perjalanan" },
    { src: "/umroh-mock-pic/gambar-5.jpg", alt: "Jamaah Umroh 1", title: "Tawaf", description: "Tawaf di sekitar Kaaba" },
    { src: "/umroh-mock-pic/gambar-6.jpg", alt: "Jamaah Umroh 2", title: "Sa'i", description: "Sa'i antara Shafa dan Marwa" },
    { src: "/umroh-mock-pic/gambar-7.jpg", alt: "Jamaah Umroh 3", title: "Ziarah", description: "Ziarah ke tempat bersejarah" },
    { src: "/umroh-mock-pic/gambar-8.jpg", alt: "Jamaah Umroh 4", title: "Doa Bersama", description: "Doa bersama jamaah" }
  ];

  const openModal = (image: {src: string, alt: string, title: string}, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  // Cleanup scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle escape key globally
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImage]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Galeri Perjalanan Ibadah
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi perjalanan jamaah kami di Tanah Suci
          </p>
        </div>
        
        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Large Featured Image */}
          <div className="md:col-span-2">
            <div 
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => openModal(galleryImages[0], 0)}
            >
              <img 
                src="/umroh-mock-pic/gambar-2.jpg" 
                alt="Jamaah di Masjidil Haram" 
                className="w-full h-80 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Masjidil Haram</h3>
                  <p className="text-sm text-gray-200">Suasana ibadah yang khusyuk</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Side Images */}
          <div className="space-y-4">
            <div 
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => openModal(galleryImages[1], 1)}
            >
              <img 
                src="/umroh-mock-pic/gambar-3.jpg" 
                alt="Jamaah di Madinah" 
                className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-bold">Masjid Nabawi</h4>
                </div>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            <div 
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => openModal(galleryImages[2], 2)}
            >
              <img 
                src="/umroh-mock-pic/gambar-4.jpg" 
                alt="Perjalanan Umroh" 
                className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-bold">Perjalanan Berkah</h4>
                </div>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Gallery Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.slice(3).map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => openModal(image, index + 3)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-32 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-xs md:text-sm font-bold">{image.title}</h4>
                </div>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {/* Modal Content */}
          <div 
            className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-full max-h-full flex flex-col items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl animate-fade-in transform transition-all duration-500 scale-100"
                style={{ 
                  animation: 'modalZoomIn 0.3s ease-out'
                }}
              />
              
              {/* Image Info - Fixed Below Image */}
              <div className="mt-4 bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg max-w-full">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-center">{selectedImage.title}</h3>
                <p className="text-sm md:text-base text-gray-200 text-center">{galleryImages[currentImageIndex]?.description}</p>
                <div className="mt-2 text-xs text-gray-300 text-center">
                  {currentImageIndex + 1} dari {galleryImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryLandingSection;
