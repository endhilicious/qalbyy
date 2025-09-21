"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MapPin, MessageCircle } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Beranda', href: '/' },
  { id: 'umroh', label: 'Paket Umroh', href: '/umroh' },
  { id: 'haji', label: 'Paket Haji', href: '/haji' },
  { id: 'about', label: 'Tentang Kami', href: '/about' },
  { id: 'contact', label: 'Kontak', href: '/contact' },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 relative">
                  <Image
                    src="/Qalbyy-logo-white.png"
                    alt="Qalbyy Travel Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain bg-green-600 rounded-xl p-1"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-gray-900">Qalbyy Travel</div>
                  <div className="text-xs text-green-600">Haji & Umroh</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">+62 811 1356 7777</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Jakarta</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeSidebar}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-2xl transform transition-all duration-300 ease-out ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-green-100">
            <div className="flex items-center">
              <div className="w-12 h-12 mr-3 relative">
                <Image
                  src="/Qalbyy-logo-white.png"
                  alt="Qalbyy Travel Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain bg-green-600 rounded-xl p-1"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Qalbyy Travel</div>
                <div className="text-xs text-green-600">Haji & Umroh</div>
              </div>
            </div>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-lg text-gray-500 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Contact Info - Mobile */}
          <div className="p-6 border-b border-green-100 bg-gradient-to-r from-green-50 to-green-50">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-green-600" />
                <span className="font-medium">+62 811 1356 7777</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-green-600" />
                <span className="font-medium">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Konsultasi Gratis</span>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <nav className="p-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={closeSidebar}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-50 hover:text-green-700 rounded-xl transition-all duration-200 font-medium group block"
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      <span className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-green-100 bg-gradient-to-r from-green-50 to-green-50">
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-600 font-medium">Hubungi Kami Sekarang</p>
              <Link
                href="https://wa.me/6281113567777"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeSidebar}
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;
