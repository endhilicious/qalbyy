'use client';
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-premiumloading.md' pada folder komponen ini (packages/ui/src/PremiumLoading). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React from 'react';

export interface PremiumLoadingProps {
  /** Loading message */
  message?: string;
  /** Size of the loading component */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Custom className */
  className?: string;
  /** Whether to show the fullscreen overlay */
  fullscreen?: boolean;
  /** Whether to show progress bar */
  showProgress?: boolean;
  /** Progress percentage (0-100) */
  progress?: number;
  /** Logo source URL or React element */
  logo?: string | React.ReactNode;
  /** Alt text for logo */
  logoAlt?: string;
  /** Primary brand color */
  primaryColor?: 'blue' | 'amber' | 'green' | 'purple' | 'red' | 'indigo' | 'teal';
  /** Secondary brand color */
  secondaryColor?: 'blue' | 'amber' | 'green' | 'purple' | 'red' | 'indigo' | 'teal';
  /** Additional loading text */
  subMessage?: string;
  /** Custom brand name or initials */
  brandName?: string;
}

/**
 * PremiumLoading Component
 * 
 * A modern loading component with heartbeat-style animation.
 * Designed to be completely customizable with brand colors and logo.
 * 
 * @param message - Loading message to display
 * @param size - Size of the loading component
 * @param className - Additional CSS classes
 * @param fullscreen - Whether to show fullscreen overlay
 * @param showProgress - Whether to show progress bar
 * @param progress - Progress percentage (0-100)
 * @param logo - Logo source URL or React element
 * @param logoAlt - Alt text for logo
 * @param primaryColor - Primary brand color
 * @param secondaryColor - Secondary brand color
 * @param subMessage - Additional loading text
 * @param brandName - Custom brand name or initials
 */
export function PremiumLoading({
  message = 'Loading...',
  size = 'lg',
  className = '',
  fullscreen = true,
  showProgress = false,
  progress = 0,
  logo,
  logoAlt = 'Logo',
  primaryColor = 'blue',
  secondaryColor = 'indigo',
  subMessage = 'Please wait...',
  brandName = 'JILC'
}: PremiumLoadingProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const logoSize = {
    sm: 24,
    md: 32,
    lg: 40,
    xl: 48
  };

  // Color mapping for Tailwind classes
  const colorClasses = {
    blue: {
      ring: 'border-blue-200',
      ringInner: 'border-blue-300',
      gradientFrom: 'from-blue-50',
      gradientTo: 'to-indigo-50',
      dots: 'bg-blue-400',
      dotsSecondary: 'bg-indigo-400',
      text: 'from-blue-600',
      textSecondary: 'to-indigo-600',
      progress: 'from-blue-500',
      progressSecondary: 'to-indigo-500'
    },
    amber: {
      ring: 'border-amber-200',
      ringInner: 'border-amber-300',
      gradientFrom: 'from-amber-50',
      gradientTo: 'to-yellow-50',
      dots: 'bg-amber-400',
      dotsSecondary: 'bg-yellow-400',
      text: 'from-amber-600',
      textSecondary: 'to-yellow-600',
      progress: 'from-amber-500',
      progressSecondary: 'to-yellow-500'
    },
    green: {
      ring: 'border-green-200',
      ringInner: 'border-green-300',
      gradientFrom: 'from-green-50',
      gradientTo: 'to-emerald-50',
      dots: 'bg-green-400',
      dotsSecondary: 'bg-emerald-400',
      text: 'from-green-600',
      textSecondary: 'to-emerald-600',
      progress: 'from-green-500',
      progressSecondary: 'to-emerald-500'
    },
    purple: {
      ring: 'border-purple-200',
      ringInner: 'border-purple-300',
      gradientFrom: 'from-purple-50',
      gradientTo: 'to-violet-50',
      dots: 'bg-purple-400',
      dotsSecondary: 'bg-violet-400',
      text: 'from-purple-600',
      textSecondary: 'to-violet-600',
      progress: 'from-purple-500',
      progressSecondary: 'to-violet-500'
    },
    red: {
      ring: 'border-red-200',
      ringInner: 'border-red-300',
      gradientFrom: 'from-red-50',
      gradientTo: 'to-rose-50',
      dots: 'bg-red-400',
      dotsSecondary: 'bg-rose-400',
      text: 'from-red-600',
      textSecondary: 'to-rose-600',
      progress: 'from-red-500',
      progressSecondary: 'to-rose-500'
    },
    indigo: {
      ring: 'border-indigo-200',
      ringInner: 'border-indigo-300',
      gradientFrom: 'from-indigo-50',
      gradientTo: 'to-blue-50',
      dots: 'bg-indigo-400',
      dotsSecondary: 'bg-blue-400',
      text: 'from-indigo-600',
      textSecondary: 'to-blue-600',
      progress: 'from-indigo-500',
      progressSecondary: 'to-blue-500'
    },
    teal: {
      ring: 'border-teal-200',
      ringInner: 'border-teal-300',
      gradientFrom: 'from-teal-50',
      gradientTo: 'to-cyan-50',
      dots: 'bg-teal-400',
      dotsSecondary: 'bg-cyan-400',
      text: 'from-teal-600',
      textSecondary: 'to-cyan-600',
      progress: 'from-teal-500',
      progressSecondary: 'to-cyan-500'
    }
  };

  const colors = colorClasses[primaryColor] || colorClasses.blue;

  const LoadingContent = () => (
    <div className="flex flex-col items-center space-y-6">
      {/* Logo with Heartbeat Animation */}
      <div className="relative">
        {/* Outer pulsing ring */}
        <div className={`${sizeClasses[size]} absolute inset-0 rounded-full border-2 ${colors.ring} animate-ping opacity-75`}></div>
        
        {/* Inner pulsing ring */}
        <div className={`${sizeClasses[size]} absolute inset-2 rounded-full border ${colors.ringInner} animate-pulse`}></div>
        
        {/* Logo container with heartbeat animation */}
        <div className={`${sizeClasses[size]} relative flex items-center justify-center bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} rounded-full shadow-lg animate-heartbeat`}>
          {logo ? (
            typeof logo === 'string' ? (
              <img
                src={logo}
                alt={logoAlt}
                width={logoSize[size]}
                height={logoSize[size]}
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-2">
                {logo}
              </div>
            )
          ) : (
            <div className={`${textSizeClasses[size]} font-bold bg-gradient-to-r ${colors.text} ${colors.textSecondary} bg-clip-text text-transparent`}>
              {brandName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        
        {/* Animated dots around logo */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 ${colors.dots} rounded-full animate-ping`} style={{ animationDelay: '0s' }}></div>
          <div className={`absolute top-1/4 right-0 transform translate-x-1 w-1.5 h-1.5 ${colors.dotsSecondary} rounded-full animate-ping`} style={{ animationDelay: '0.5s' }}></div>
          <div className={`absolute bottom-1/4 left-0 transform -translate-x-1 w-1.5 h-1.5 ${colors.dots} rounded-full animate-ping`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 ${colors.dotsSecondary} rounded-full animate-ping`} style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="text-center space-y-2">
        <p className={`${textSizeClasses[size]} font-semibold bg-gradient-to-r ${colors.text} ${colors.textSecondary} bg-clip-text text-transparent`}>
          {message}
        </p>
        <p className="text-sm text-gray-500">
          {subMessage}
        </p>
      </div>
      
      {/* Progress Bar */}
      {showProgress && (
        <div className="w-64 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className={`bg-gradient-to-r ${colors.progress} ${colors.progressSecondary} h-2 rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
          ></div>
        </div>
      )}
      
      {/* Loading Dots Animation */}
      <div className="flex space-x-1">
        <div className={`w-2 h-2 ${colors.dots} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
        <div className={`w-2 h-2 ${colors.dotsSecondary} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
        <div className={`w-2 h-2 ${colors.dots} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );

  if (fullscreen) {
    return (
      <div className={`fixed inset-0 bg-white z-50 flex items-center justify-center ${className}`}>
        <LoadingContent />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <LoadingContent />
    </div>
  );
}

export default PremiumLoading;