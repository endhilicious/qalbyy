'use client';

import React, { useState, useEffect } from 'react';
import PremiumLoading from '../PremiumLoading/PremiumLoading';

interface AppLoadingProps {
  /** Whether to show loading */
  isLoading: boolean;
  /** Loading message */
  message?: string;
  /** Progress percentage (0-100) */
  progress?: number;
  /** Whether to show progress bar */
  showProgress?: boolean;
}

/**
 * AppLoading Component
 * 
 * Wrapper untuk PremiumLoading yang bisa digunakan di seluruh aplikasi
 * dengan konfigurasi default untuk Qalbyy branding
 */
export function AppLoading({
  isLoading,
  message = 'Memuat aplikasi...',
  progress = 0,
  showProgress = false
}: AppLoadingProps) {
  if (!isLoading) return null;

  return (
    <PremiumLoading
      message={message}
      subMessage="Mohon tunggu sebentar..."
      logo="/Qalbyy-logo-black.png"
      logoAlt="Qalbyy"
      primaryColor="green"
      secondaryColor="emerald"
      size="lg"
      fullscreen={true}
      showProgress={false}
    />
  );
}

export default AppLoading;
