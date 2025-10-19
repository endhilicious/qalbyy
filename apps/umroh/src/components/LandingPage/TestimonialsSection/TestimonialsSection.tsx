'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '#/constants/landingpage';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number>(0);
  const touchEndXRef = useRef<number>(0);

  // Auto-scroll functionality
  const startAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    autoScrollIntervalRef.current = setInterval(() => {
      if (isAutoScrolling) {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }
    }, 4000);
  }, [isAutoScrolling]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    stopAutoScroll();
    setTimeout(() => {
      if (isAutoScrolling) startAutoScroll();
    }, 5000);
  }, [isAutoScrolling, startAutoScroll, stopAutoScroll]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    stopAutoScroll();
    setTimeout(() => {
      if (isAutoScrolling) startAutoScroll();
    }, 5000);
  }, [isAutoScrolling, startAutoScroll, stopAutoScroll]);

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsAutoScrolling(false);
    stopAutoScroll();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    
    const distance = touchStartXRef.current - touchEndXRef.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }

    setTimeout(() => {
      setIsAutoScrolling(true);
      startAutoScroll();
    }, 3000);
  };

  // Scroll to specific testimonial
  const scrollToTestimonial = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / TESTIMONIALS.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  }, []);

  // Effect for auto-scroll
  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [isAutoScrolling, startAutoScroll, stopAutoScroll]);

  // Effect to sync scroll position with currentIndex
  useEffect(() => {
    scrollToTestimonial(currentIndex);
  }, [currentIndex, scrollToTestimonial]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-gray-600">
            Apa kata mereka tentang pelayanan kami
          </p>
        </div>
        
        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="group relative bg-white/80 backdrop-blur-sm border border-green-100 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-400 to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 italic">
                  "{testimonial.review}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-200">
                    <img 
                      src="/umroh-mock-pic/user-photo-picture.jpg" 
                      alt={`${testimonial.name} - Customer Photo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.package} • {testimonial.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll - Visible on Mobile Only */}
        <div className="md:hidden relative">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-white border border-green-200 rounded-full shadow-lg hover:bg-green-50 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Testimoni sebelumnya"
            >
              <ArrowLeft className="w-5 h-5 text-green-600" />
            </button>
            
            <div className="text-center">
              <span className="text-sm text-gray-600 font-medium">
                {currentIndex + 1} dari {TESTIMONIALS.length}
              </span>
            </div>
            
            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-white border border-green-200 rounded-full shadow-lg hover:bg-green-50 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Testimoni selanjutnya"
            >
              <ArrowRight className="w-5 h-5 text-green-600" />
            </button>
          </div>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-none w-80 snap-center group relative bg-white/80 backdrop-blur-sm border border-green-100 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-400 to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed text-sm mb-6 italic">
                    "{testimonial.review}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-200">
                      <img 
                        src="/umroh-mock-pic/user-photo-picture.jpg" 
                        alt={`${testimonial.name} - Customer Photo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.package} • {testimonial.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-green-500 w-6' 
                    : 'bg-green-200 hover:bg-green-300'
                }`}
                aria-label={`Lihat testimoni ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
