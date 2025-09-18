'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Home, 
  BookOpen, 
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useSidebar } from '#/contexts/SidebarContext';
import { MENU_ITEMS } from '#/constants/menu';

export default function Sidebar() {
  const { isDesktopMinimized, toggleDesktopMinimize, isMobileOpen, setIsMobileOpen, toggleMobile } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    { 
      id: 'home',
      name: 'Beranda', 
      href: '/', 
      icon: Home, 
      description: 'Halaman utama aplikasi',
      isEnabled: true
    },
    ...MENU_ITEMS.map(item => ({
      id: item.id,
      name: item.title,
      href: item.href,
      icon: item.icon,
      description: item.description,
      isEnabled: item.isEnabled
    }))
  ];


  const handleNavigation = (href: string, isEnabled: boolean) => {
    if (!isEnabled) return;
    
    console.log('Navigating to:', href);
    router.push(href);
    setIsMobileOpen(false);
  };

  const isPathActive = (itemHref: string) => {
    if (itemHref === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(itemHref);
  };

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname, setIsMobileOpen]);

  return (
    <>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleMobile}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 bg-gradient-to-b from-white to-green-50/30 shadow-xl transform transition-all duration-300 ease-in-out flex flex-col
        ${isMobileOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'}
        ${isDesktopMinimized ? 'lg:w-16' : 'lg:w-64'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 lg:p-6 border-b border-green-200 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            {!isDesktopMinimized && (
              <div className="transition-opacity duration-300">
                <h2 className="text-lg font-bold text-gray-900">Qalbyy</h2>
                <p className="text-xs text-green-600 font-medium">Aplikasi Islam</p>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Minimize Button - Desktop Only */}
            <button
              onClick={toggleDesktopMinimize}
              className="hidden lg:block p-2 rounded-lg hover:bg-green-100 transition-colors"
              title={isDesktopMinimized ? 'Expand sidebar' : 'Minimize sidebar'}
            >
              {isDesktopMinimized ? (
                <ChevronRight className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              )}
            </button>
            
            {/* Close Button - Mobile Only */}
            <button
              onClick={toggleMobile}
              className="lg:hidden p-2 rounded-lg hover:bg-green-100 transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Islamic Greeting */}
        {!isDesktopMinimized && (
          <div className="px-4 lg:px-6 py-4 border-b border-green-200 bg-gradient-to-r from-green-50 to-green-100">
            <div className="text-center">
              <p className="text-sm font-semibold text-green-800 mb-1">
                السَّلاَمُ عَلَيْكُمْ
              </p>
              <p className="text-xs text-green-600">
                Assalamu&apos;alaikum
              </p>
            </div>
          </div>
        )}

        {/* Navigation - Scrollable area */}
        <nav className="flex-1 px-3 lg:px-4 py-4 lg:py-6 space-y-1 lg:space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = isPathActive(item.href);
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.href, item.isEnabled)}
                disabled={!item.isEnabled}
                className={`
                  w-full flex items-center justify-between p-2 lg:p-3 rounded-lg transition-all duration-200 group relative
                  ${isActive 
                    ? 'bg-green-50 border-l-4 border-l-green-500 border border-green-200 text-green-700 shadow-sm' 
                    : item.isEnabled
                      ? 'hover:bg-green-50 text-gray-700 hover:text-green-700 hover:border-l-4 hover:border-l-green-300'
                      : 'text-gray-400 cursor-not-allowed opacity-60'
                  }
                  ${isDesktopMinimized ? 'lg:justify-center lg:px-2' : ''}
                `}
                title={isDesktopMinimized ? item.name : undefined}
              >
                <div className={`flex items-center ${isDesktopMinimized ? 'lg:justify-center' : 'space-x-3'}`}>
                  <div className={`p-1 rounded-md ${
                    isActive 
                      ? 'bg-green-100' 
                      : item.isEnabled 
                        ? 'group-hover:bg-green-100' 
                        : 'bg-gray-100'
                  }`}>
                    <Icon className={`h-5 w-5 ${
                      isActive 
                        ? 'text-green-600' 
                        : item.isEnabled 
                          ? 'text-gray-500 group-hover:text-green-600' 
                          : 'text-gray-400'
                    }`} />
                  </div>
                  {!isDesktopMinimized && (
                    <div className="text-left flex-1 transition-opacity duration-300">
                      <p className={`font-medium ${
                        isActive 
                          ? 'text-green-700' 
                          : item.isEnabled 
                            ? 'text-gray-900' 
                            : 'text-gray-400'
                      }`}>
                        {item.name}
                      </p>
                      <p className={`text-xs ${
                        isActive 
                          ? 'text-green-600' 
                          : item.isEnabled 
                            ? 'text-gray-500' 
                            : 'text-gray-400'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
                
                {!isDesktopMinimized && (
                  <div className="flex items-center space-x-2">
                    {isActive && (
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                    {!item.isEnabled && (
                      <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                        Soon
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 lg:p-4 border-t border-green-200 flex-shrink-0">
          {!isDesktopMinimized ? (
            <div className="text-center space-y-2">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3">
                <p className="text-xs text-green-700 font-medium mb-1">
                  بَارَكَ اللهُ فِيكُمْ
                </p>
                <p className="text-xs text-green-600">
                  Barakallahu fikum
                </p>
              </div>
              <p className="text-xs text-gray-500">
                © 2024 Qalbyy
              </p>
              <p className="text-xs text-gray-400">
                Aplikasi Islam v1.0
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
