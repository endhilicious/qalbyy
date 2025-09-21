"use client"

import React from 'react'
import { 
  HeroLandingSection,
  StatsLandingSection,
  ServicesLandingSection,
  FeaturesLandingSection,
  GalleryLandingSection,
  TestimonialsSection,
  CTALandingSection,
  FloatingActionButtons 
} from '#/components/LandingPage'

const LandingPageScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        {/* Hero Section */}
        <HeroLandingSection />

        {/* Stats Section */}
        <StatsLandingSection />

        {/* Services Section */}
        <ServicesLandingSection />

        {/* Features Section */}
        <FeaturesLandingSection />

        {/* Gallery Section */}
        <GalleryLandingSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTALandingSection />

        {/* Floating Action Buttons */}
        <FloatingActionButtons />
    </div>
  )
}

export default LandingPageScreen