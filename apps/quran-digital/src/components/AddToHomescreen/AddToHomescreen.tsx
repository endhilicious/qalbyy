'use client';

import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { Modal } from '@repo/ui';

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
const SUPPRESS_MS = 5 * 60 * 1000; // 5 minutes

const AddToHomescreen: React.FC<AddToHomescreenProps> = ({ className = '' }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const setSuppressFor5m = () => {
    try {
      sessionStorage.setItem(SUPPRESS_KEY, String(Date.now() + SUPPRESS_MS));
    } catch {}
  };

  const isSuppressed = () => {
    try {
      const until = sessionStorage.getItem(SUPPRESS_KEY);
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

    // Listen for beforeinstallprompt event (Android/Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Only show install prompt automatically if mobile, not installed, not iOS, and not suppressed
      if (!checkStandalone() && !checkIOS() && checkMobile() && !isSuppressed()) {
        setShowInstallPrompt(true);
      }
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      setSuppressFor5m(); // prevent re-showing the modal shortly after installation
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

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
        setSuppressFor5m(); // clicking install should also suppress future modal for 5 minutes
      } catch (error) {
        console.error('Error installing app:', error);
      }
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setSuppressFor5m(); // suppress modal for 5 minutes after dismiss
  };

  // Don't render on desktop or if already in standalone mode
  if (isStandalone || !isMobile) {
    return null;
  }

  return (
    <>
      {/* Install Button (mobile only) */}
      <button
        onClick={handleInstallClick}
        className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors hover:bg-green-50 text-gray-700 hover:text-green-700 ${className}`}
        aria-label="Install Qalbyy App"
      >
        <Download className="w-5 h-5" />
        <span className="font-medium">Install App</span>
      </button>

      {/* Install Prompt Modal using shared UI component */}
      <Modal
        isOpen={showInstallPrompt}
        onClose={handleDismiss}
        title="Install Qalbyy"
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
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Smartphone className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Install aplikasi Qalbyy untuk pengalaman yang lebih baik dan akses offline.
            </p>
          </div>

          {isIOS ? (
            // iOS Instructions
            <div className="bg-blue-50 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-blue-900 text-sm">Cara Install di iOS:</h4>
              <ol className="text-xs text-blue-800 space-y-2 list-decimal list-inside">
                <li>Tap tombol <strong>Share</strong> (kotak dengan panah ke atas) di Safari</li>
                <li>Scroll ke bawah dan pilih <strong>"Add to Home Screen"</strong></li>
                <li>Tap <strong>"Add"</strong> untuk menginstall aplikasi</li>
              </ol>
            </div>
          ) : (
            // Android/Chrome Install
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Ukuran aplikasi: ~2MB</span>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={handleDismiss}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Nanti Saja
                </button>
                <button
                  onClick={handleInstallClick}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Install Sekarang
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
