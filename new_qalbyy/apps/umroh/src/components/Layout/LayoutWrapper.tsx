'use client';

import React from 'react';
import Navbar from '#/components/Navbar';
import Sidebar from '#/components/Sidebar';
import { useSidebar } from '#/contexts/SidebarContext';

interface LayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
  showNavbar?: boolean;
  showSidebar?: boolean;
  surahTitle?: string;
  currentSurahId?: number;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ 
  children, 
  className = '',
  showNavbar = true,
  showSidebar = true,
  surahTitle,
  currentSurahId
}) => {
  const { isDesktopMinimized } = useSidebar();

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50 ${className}`}>
      {/* Navbar */}
      {showNavbar && <Navbar surahTitle={surahTitle} currentSurahId={currentSurahId} />}
      
      {/* Sidebar */}
      {showSidebar && <Sidebar />}
      
      {/* Main Content */}
      <main className={`
        transition-all duration-300 ease-in-out
        ${showNavbar ? 'pt-16 sm:pt-20' : ''}
        ${showSidebar ? (isDesktopMinimized ? 'lg:ml-16' : 'lg:ml-64') : ''}
      `}>
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default LayoutWrapper;
