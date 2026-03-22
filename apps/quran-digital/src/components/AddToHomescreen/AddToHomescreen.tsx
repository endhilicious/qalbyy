'use client';

import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { Modal } from '@repo/ui';
import Image from 'next/image';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface AddToHomescreenProps {
  className?: string;
}

const SUPPRESS_KEY = 'a2hs-suppress-until';
const SUPPRESS_MS = 12 * 60 * 60 * 1000; // 12 hours
const SESSION_START_KEY = 'a2hs-session-start';
const USAGE_DELAY_MS = 5 * 60 * 1000; // 5 minutes usage delay

const AddToHomescreen: React.FC<AddToHomescreenProps> = ({ className = '' }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [usageDelayMet, setUsageDelayMet] = useState(false);
  const [imgError, setImgError] = useState(false);

  const setSuppressFor12h = () => {
    try {
      localStorage.setItem(SUPPRESS_KEY, String(Date.now() + SUPPRESS_MS));
    } catch {}
  };

  const isSuppressed = () => {
    try {
      const until = localStorage.getItem(SUPPRESS_KEY);
      return until ? parseInt(until, 10) > Date.now() : false;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    // Check if app is already installed (standalone mode)
    const checkStandalone = () => {
      return (
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true
      );
    };

    // Check if device is iOS
    const checkIOS = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    };

    // Check if mobile browser
    const checkMobile = () => {
      const ua = navigator.userAgent || (navigator as any).vendor || (window as any).opera;
      const isUAOnMobile = /android|iphone|ipad|ipod|iemobile|mobile/i.test(ua);
      const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      return isUAOnMobile || isCoarsePointer;
    };

    setIsStandalone(checkStandalone());
    setIsIOS(checkIOS());
    setIsMobile(checkMobile());

    // Track session usage time and set 5-minute delay before showing
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    try {
      let start = Number(sessionStorage.getItem(SESSION_START_KEY));
      if (!start || Number.isNaN(start)) {
        start = Date.now();
        sessionStorage.setItem(SESSION_START_KEY, String(start));
      }
      const elapsed = Date.now() - start;
      const remaining = USAGE_DELAY_MS - elapsed;
      if (remaining <= 0) {
        setUsageDelayMet(true);
      } else {
        timeoutId = setTimeout(() => setUsageDelayMet(true), remaining);
      }
    } catch {
      timeoutId = setTimeout(() => setUsageDelayMet(true), USAGE_DELAY_MS);
    }

    // Listen for beforeinstallprompt event (Android/Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      setSuppressFor12h(); // prevent re-showing the modal for 12 hours after installation
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Decide when to show the modal automatically:
  // - Only on mobile, not standalone
  // - Respect suppression period
  // - After 5 minutes usage delay
  // - iOS: show instructional modal
  // - Android/Chrome: wait until beforeinstallprompt event is available
  useEffect(() => {
    if (!usageDelayMet) return;
    if (isStandalone || !isMobile) return;
    if (isSuppressed()) return;

    if (isIOS) {
      setShowInstallPrompt(true);
    } else if (deferredPrompt) {
      setShowInstallPrompt(true);
    }
  }, [usageDelayMet, isStandalone, isMobile, isIOS, deferredPrompt]);

  const handleInstallClick = async () => {
    // On iOS, respect suppression and only show instructions if not suppressed
    if (isIOS) {
      if (isSuppressed()) return;
      setShowInstallPrompt(true);
      return;
    }

    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;

        if (choiceResult.outcome === 'accepted') {
          setIsInstalled(true);
        }

        setShowInstallPrompt(false);
        setDeferredPrompt(null);
        setSuppressFor12h(); // clicking install should also suppress future modal for 12 hours
      } catch (error) {
        console.error('Error installing app:', error);
      }
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setSuppressFor12h(); // suppress modal for 12 hours after dismiss
  };

  // Don't render on desktop or if already in standalone mode
  if (isStandalone || !isMobile) {
    return null;
  }

  return (
    <>
      {/* Install Button (mobile only) */}
      {/* <button
        onClick={handleInstallClick}
        className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors hover:bg-green-50 text-gray-700 hover:text-green-700 ${className}`}
        aria-label="Add Qalbyy to Homescreen"
      >
        <Download className="w-5 h-5" />
        <span className="font-medium">Tambahkan ke layar utama</span>
      </button> */}

      {/* Install Prompt Modal using shared UI component */}
      <Modal
        isOpen={showInstallPrompt}
        onClose={handleDismiss}
        title="Tambahkan ke layar utama"
        size="sm"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            {/* Empty spacer to align close icon if no header section above */}
            <div />
            <button
              onClick={handleDismiss}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-green-200 animate-pulse" style={{ animationDuration: '1.8s' }}></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-50 to-emerald-50 shadow-inner"></div>
                <div className="relative flex items-center justify-center" style={{ width: '200px', top: '-79px', left: '-46px' }}>
                  {!imgError ? (
                    <Image
                      // src="/qalbyy-with-background.png"
                      src="/quran-in-phone.png"
                      alt="Qalbyy App"
                      width={200}
                      height={200}
                      className="p-2 object-contain"
                      onError={() => setImgError(true)}
                      unoptimized
                      priority
                    />
                  ) : (
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-green-600" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tambahkan ke layar utama Qalbyy untuk pengalaman yang lebih baik dan akses offline.
            </p>
          </div>

          {isIOS ? (
            // iOS Instructions
            <div className="bg-blue-50 rounded-xl p-4 space-y-3 border border-blue-100">
              <h4 className="font-semibold text-blue-900 text-sm">Cara Tambahkan ke layar utama di iOS</h4>
              <ol className="text-xs text-blue-800 space-y-2 list-decimal list-inside text-left">
                <li>Tap tombol <strong>Share</strong> (kotak dengan panah ke atas) di Safari</li>
                <li>Scroll ke bawah dan pilih <strong>"Add to Home Screen"</strong></li>
                <li>Tap <strong>"Add"</strong> untuk menambahkan ke layar utama</li>
              </ol>
            </div>
          ) : (
            // Android/Chrome Install
            <div className="space-y-3">
              {/* <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Ukuran aplikasi: ~2MB</span>
              </div> */}
              
              <div className="flex space-x-3">
                <button
                  onClick={handleDismiss}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Nanti Saja
                </button>
                <button
                  onClick={handleInstallClick}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium shadow-sm"
                >
                  Tambahkan
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default AddToHomescreen;
