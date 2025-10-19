'use client';

import React, { useState, useEffect } from 'react';
import PremiumLoading from '../../../components/PremiumLoading/PremiumLoading';

export default function LoadingDemoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedColor, setSelectedColor] = useState<'blue' | 'amber' | 'green' | 'purple' | 'red'>('green');
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');
  const [showProgress, setShowProgress] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const startLoading = () => {
    setIsLoading(true);
    setProgress(0);
    
    // Loading elegan tanpa progress bar - hanya heartbeat animation
    setTimeout(() => setIsLoading(false), 3000);
  };

  if (isLoading) {
    return (
      <PremiumLoading
        message="Demo Loading Component"
        subMessage="Menyiapkan demo untuk Anda..."
        size={selectedSize}
        primaryColor={selectedColor}
        fullscreen={fullscreen}
        showProgress={false}
        logo="/Qalbyy-logo-black.png"
        logoAlt="Qalbyy"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Premium Loading Component Demo</h1>
          <p className="text-gray-600 mb-8">
            Demo untuk menguji semua fitur PremiumLoading component dengan berbagai konfigurasi.
          </p>

          {/* Demo Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Warna Theme</h3>
              <div className="grid grid-cols-5 gap-3">
                {(['blue', 'amber', 'green', 'purple', 'red'] as const).map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedColor === color
                        ? 'border-gray-800 bg-gray-100'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full bg-${color}-500 mx-auto`}></div>
                    <p className="text-xs mt-1 capitalize">{color}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Ukuran</h3>
              <div className="grid grid-cols-4 gap-3">
                {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? 'border-gray-800 bg-gray-100'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full bg-green-500 mx-auto ${size === 'sm' ? 'scale-75' : size === 'lg' ? 'scale-125' : size === 'xl' ? 'scale-150' : ''}`}></div>
                    <p className="text-xs mt-1 uppercase">{size}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Opsi</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={showProgress}
                    onChange={(e) => setShowProgress(e.target.checked)}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">Tampilkan Progress Bar</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={fullscreen}
                    onChange={(e) => setFullscreen(e.target.checked)}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">Fullscreen Mode</span>
                </label>
              </div>
            </div>

            {/* Preview */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Preview</h3>
              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center min-h-[200px]">
                <PremiumLoading
                  message="Preview"
                  subMessage="Ini adalah preview"
                  size={selectedSize}
                  primaryColor={selectedColor}
                  fullscreen={false}
                  showProgress={showProgress}
                  progress={50}
                  logoAlt="Q"
                />
              </div>
            </div>
          </div>

          {/* Demo Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={startLoading}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              🚀 Jalankan Demo Loading
            </button>
            <button
              onClick={() => {
                setShowProgress(true);
                startLoading();
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              📊 Demo dengan Progress
            </button>
            <button
              onClick={() => {
                setFullscreen(false);
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 3000);
              }}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
                  🎯 Demo Inline (Non-Fullscreen)
            </button>
          </div>

          {/* Code Examples */}
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Contoh Penggunaan</h2>
            
            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Basic Usage
<PremiumLoading />

// Dengan Custom Branding
<PremiumLoading
  message="Selamat Datang di Qalbyy"
  subMessage="Menyiapkan pengalaman terbaik..."
  logo="/Qalbyy-logo-white.png"
  logoAlt="Qalbyy"
  primaryColor="green"
  size="xl"
/>

// Dengan Progress Bar
<PremiumLoading
  message="Memuat data..."
  showProgress={true}
  progress={progress}
  primaryColor="green"
/>

// Inline Loading
<PremiumLoading
  fullscreen={false}
  message="Memproses..."
  primaryColor="green"
  size="md"
/>`}</pre>
            </div>
          </div>

          {/* Available Props */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Available Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono">message</td>
                    <td className="border border-gray-300 px-4 py-2">string</td>
                    <td className="border border-gray-300 px-4 py-2">"Memuat..."</td>
                    <td className="border border-gray-300 px-4 py-2">Pesan loading utama</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono">size</td>
                    <td className="border border-gray-300 px-4 py-2">'sm' | 'md' | 'lg' | 'xl'</td>
                    <td className="border border-gray-300 px-4 py-2">'lg'</td>
                    <td className="border border-gray-300 px-4 py-2">Ukuran komponen</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono">primaryColor</td>
                    <td className="border border-gray-300 px-4 py-2">string</td>
                    <td className="border border-gray-300 px-4 py-2">'green'</td>
                    <td className="border border-gray-300 px-4 py-2">Warna theme (blue, amber, green, purple, red)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono">fullscreen</td>
                    <td className="border border-gray-300 px-4 py-2">boolean</td>
                    <td className="border border-gray-300 px-4 py-2">true</td>
                    <td className="border border-gray-300 px-4 py-2">Mode fullscreen overlay</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono">showProgress</td>
                    <td className="border border-gray-300 px-4 py-2">boolean</td>
                    <td className="border border-gray-300 px-4 py-2">false</td>
                    <td className="border border-gray-300 px-4 py-2">Tampilkan progress bar</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono">progress</td>
                    <td className="border border-gray-300 px-4 py-2">number</td>
                    <td className="border border-gray-300 px-4 py-2">0</td>
                    <td className="border border-gray-300 px-4 py-2">Persentase progress (0-100)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
