'use client';

import React from 'react';
import { Menu, Home, BookOpen, Heart } from 'lucide-react';
import { useSidebar } from '#/contexts/SidebarContext';
import { useRouter, usePathname } from 'next/navigation';
import SurahSelector from '#/components/SurahSelector';

interface NavbarProps {
  surahTitle?: string;
  currentSurahId?: number;
}

export default function Navbar({ surahTitle, currentSurahId }: NavbarProps = {}) {
  const { toggleMobile } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();

  const quickActions = [
    { 
      id: 'home',
      name: 'Beranda', 
      href: '/', 
      icon: Home,
    },
    { 
      id: 'alquran',
      name: 'Al-Quran', 
      href: '/alquran', 
      icon: BookOpen,
    },
    { 
      id: 'doa',
      name: 'Doa', 
      href: '/doa', 
      icon: Heart,
    },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  const getPageTitle = () => {
    if (pathname === '/') return 'Beranda';
    if (pathname.startsWith('/alquran')) {
      return surahTitle || 'Al-Quran';
    }
    if (pathname.startsWith('/doa')) return 'Doa Harian';
    return 'Qalbyy';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobile}
              className="lg:hidden p-3 rounded-xl text-black hover:text-green-600 hover:bg-green-50/50 transition-all duration-200 active:scale-95"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-black" />
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">Qalbyy</h1>
                <p className="text-xs text-green-600 font-medium">Aplikasi Islam</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {quickActions.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.href)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 relative group ${
                    isActive 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Page Title - Mobile */}
          <div className="lg:hidden">
            {pathname.startsWith('/alquran/') && pathname !== '/alquran' ? (
              <SurahSelector 
                currentSurahId={currentSurahId}
                currentSurahName={surahTitle}
              />
            ) : (
              <h1 className="text-lg font-bold text-gray-900">{getPageTitle()}</h1>
            )}
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {pathname.startsWith('/alquran/') && pathname !== '/alquran' ? (
              <SurahSelector 
                currentSurahId={currentSurahId}
                currentSurahName={surahTitle}
              />
            ) : (
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">
                  {new Date().toLocaleDateString('id-ID', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-xs text-green-600">
                  {new Date().toLocaleTimeString('id-ID', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
