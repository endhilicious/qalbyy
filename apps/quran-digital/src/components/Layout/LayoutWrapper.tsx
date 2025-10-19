'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Home } from 'lucide-react';
import { Layout } from '@repo/ui';
import type { SidebarNavigationItem } from '@repo/ui';
import { MENU_ITEMS } from '#/constants/menu';
import AddToHomescreen from '#/components/AddToHomescreen';
import SurahSelector from '#/components/SurahSelector';

interface LayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
  showNavbar?: boolean; // maps to Header visibility
  showSidebar?: boolean; // maps to Sidebar visibility
  surahTitle?: string;
  currentSurahId?: number;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
  className = '',
  showNavbar = true,
  showSidebar = true,
  surahTitle,
  currentSurahId,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const navigationItems: SidebarNavigationItem[] = [
    {
      id: 'home',
      label: 'Beranda',
      href: '/',
      icon: Home,
      description: 'Halaman utama aplikasi',
    },
    ...MENU_ITEMS.map((item) => ({
      id: item.id,
      label: item.title,
      href: item.href,
      icon: item.icon as any,
      description: item.description,
      disabled: !item.isEnabled,
      comingSoon: !item.isEnabled,
    })),
  ];

  const headerCustomActions = (
    <>
      {pathname.startsWith('/alquran/') && pathname !== '/alquran' ? (
        <SurahSelector currentSurahId={currentSurahId} currentSurahName={surahTitle} />
      ) : null}
    </>
  );

  const sidebarFooter = (
    <div className="space-y-2">
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3">
        <p className="text-xs text-green-700 font-medium mb-1">بَارَكَ اللهُ فِيكُمْ</p>
        <p className="text-xs text-green-600">Barakallahu fikum</p>
      </div>
      <p className="text-xs text-gray-500">© 2024 Qalbyy</p>
      <p className="text-xs text-gray-400">Aplikasi Islam v1.0</p>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50 ${className}`}>
      <Layout
        showHeader={!!showNavbar}
        showSidebar={!!showSidebar}
        header={{
          appTitle: 'Qalbyy',
          logo: (
            <img
              src="/Qalbyy-logo-black.png"
              alt="Qalbyy Logo"
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
            />
          ),
          customActions: headerCustomActions,
        }}
        sidebar={{
          appTitle: 'Qalbyy',
          logo: '/Qalbyy-logo-white.png',
          navigationItems,
          activePath: pathname,
          onNavigationClick: (item) => {
            if (item.href) router.push(item.href);
          },
          footerContent: sidebarFooter,
        }}
        onMobileSidebarChange={(open) => {
          // Lock body scroll when mobile sidebar (drawer) is open
          if (typeof document !== 'undefined') {
            document.body.style.overflow = open ? 'hidden' : 'unset';
          }
        }}
      >
        {children}
        {/* Global install prompt trigger inside layout to ensure backdrop is correct */}
        <AddToHomescreen />
      </Layout>
    </div>
  );
};

export default LayoutWrapper;
