'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { BreadcrumbItem } from '#/components/Breadcrumbs';

// Route configuration for breadcrumbs
const routeConfig: Record<string, { label: string; basePath?: string }> = {
  '/': { label: 'Beranda' },
  '/apps': { label: 'Aplikasi' },
  '/apps/alquran': { label: 'Al-Quran' },
  '/apps/doa': { label: 'Doa' },
  '/haji': { label: 'Paket Haji' },
  '/umroh': { label: 'Paket Umroh' },
  '/contact': { label: 'Kontak' },
  '/about': { label: 'Tentang Kami' },
  '/haji-umroh': { label: 'Haji & Umroh' },
};

export const useBreadcrumbs = (customItems?: BreadcrumbItem[]): BreadcrumbItem[] => {
  const pathname = usePathname();

  return useMemo(() => {
    // If custom items are provided, use them
    if (customItems && customItems.length > 0) {
      return customItems;
    }

    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    // Always add home if not on home page
    if (pathname !== '/') {
      breadcrumbs.push({
        label: 'Beranda',
        href: '/',
        isCurrentPage: false,
      });
    }

    // Build breadcrumbs from path segments
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Get label from route config or format segment
      const config = routeConfig[currentPath];
      let label = config?.label || segment;
      
      // Format label if not in config
      if (!config?.label) {
        // Handle dynamic routes (e.g., /apps/alquran/1 -> "Surat 1")
        if (currentPath.includes('/apps/alquran/') && /^\d+$/.test(segment)) {
          label = `Surat ${segment}`;
        } else if (currentPath.includes('/apps/doa/') && /^\d+$/.test(segment)) {
          label = `Doa ${segment}`;
        } else {
          // Capitalize and format segment
          label = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }
      }

      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrentPage: isLast,
      });
    });

    return breadcrumbs;
  }, [pathname, customItems]);
};

export default useBreadcrumbs;
