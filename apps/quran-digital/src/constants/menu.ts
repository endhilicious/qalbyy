import { BookOpen, ScrollText, Heart, Circle, Clock, Compass, Calendar, Sparkles, Globe } from 'lucide-react';

// Menu items untuk aplikasi Islam
export interface MenuItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  isEnabled: boolean;
  bgGradient: string;
  iconBg: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'alquran',
    title: 'Al-Quran',
    description: 'Baca Al-Quran dan terjemahan',
    icon: BookOpen,
    href: '/alquran',
    isEnabled: true,
    bgGradient: 'from-green-500 to-green-600',
    iconBg: 'bg-green-100 text-green-700',
  },
  {
    id: 'doa',
    title: 'Doa Harian',
    description: 'Doa-doa dalam kehidupan sehari-hari',
    icon: Heart,
    href: '/doa',
    isEnabled: true,
    bgGradient: 'from-green-500 to-green-600',
    iconBg: 'bg-green-100 text-green-700',
  },
  {
    id: 'haji-umroh',
    title: 'Haji & Umroh',
    description: 'Paket perjalanan ibadah terpercaya',
    icon: Globe,
    href: '/haji-umroh',
    isEnabled: false,
    bgGradient: 'from-green-500 to-green-600',
    iconBg: 'bg-green-100 text-green-700',
  },
  {
    id: 'hadits',
    title: 'Hadits',
    description: 'Koleksi hadits shahih',
    icon: ScrollText,
    href: '/hadits',
    isEnabled: false,
    bgGradient: 'from-gray-400 to-gray-500',
    iconBg: 'bg-gray-100 text-gray-500',
  },
  {
    id: 'tasbih',
    title: 'Tasbih Digital',
    description: 'Tasbih digital untuk dzikir',
    icon: Circle,
    href: '/tasbih',
    isEnabled: false,
    bgGradient: 'from-gray-400 to-gray-500',
    iconBg: 'bg-gray-100 text-gray-500',
  },
  {
    id: 'jadwal-sholat',
    title: 'Jadwal Sholat',
    description: 'Waktu sholat berdasarkan lokasi',
    icon: Clock,
    href: '/jadwal-sholat',
    isEnabled: false,
    bgGradient: 'from-gray-400 to-gray-500',
    iconBg: 'bg-gray-100 text-gray-500',
  },
  {
    id: 'qiblat',
    title: 'Arah Qiblat',
    description: 'Petunjuk arah kiblat',
    icon: Compass,
    href: '/qiblat',
    isEnabled: false,
    bgGradient: 'from-gray-400 to-gray-500',
    iconBg: 'bg-gray-100 text-gray-500',
  },
  {
    id: 'kalender-islam',
    title: 'Kalender Islam',
    description: 'Kalender hijriah dan hari-hari penting',
    icon: Calendar,
    href: '/kalender-islam',
    isEnabled: false,
    bgGradient: 'from-gray-400 to-gray-500',
    iconBg: 'bg-gray-100 text-gray-500',
  },
  {
    id: 'asmaul-husna',
    title: 'Asmaul Husna',
    description: '99 nama Allah yang indah',
    icon: Sparkles,
    href: '/asmaul-husna',
    isEnabled: false,
    bgGradient: 'from-gray-400 to-gray-500',
    iconBg: 'bg-gray-100 text-gray-500',
  },
];

/**
 * Menghasilkan daftar menu yang terlihat berdasarkan lingkungan.
 * - Di localhost: semua item ditampilkan (yang isEnabled=false akan ditandai "coming soon" oleh UI).
 * - Di environment produksi: hanya item dengan isEnabled=true yang ditampilkan.
 */
export function getVisibleMenuItems(isLocalhost: boolean): MenuItem[] {
  if (isLocalhost) {
    return MENU_ITEMS;
  }
  return MENU_ITEMS.filter(item => item.isEnabled);
}

/**
 * Normalisasi pathname/href agar konsisten untuk penentuan menu aktif.
 * - Menghapus query/hash jika ada.
 * - Menghapus trailing slash (kecuali root "/").
 */
export function normalizeMenuPath(path: string): string {
  const raw = (path || '/').split('?')[0]?.split('#')[0] ?? '/';
  const withLeadingSlash = raw.startsWith('/') ? raw : `/${raw}`;
  const trimmed = withLeadingSlash.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/**
 * Menentukan apakah sebuah href menu dianggap aktif untuk pathname tertentu.
 * Cocok untuk:
 * - Trailing slash: "/alquran/" vs "/alquran"
 * - Sub-route: "/alquran/1" tetap mengaktifkan "/alquran"
 */
export function isMenuHrefActive(pathname: string, itemHref: string): boolean {
  const current = normalizeMenuPath(pathname);
  const href = normalizeMenuPath(itemHref);

  if (href === '/') return current === '/';
  return current === href || current.startsWith(`${href}/`);
}

/**
 * Menghasilkan href menu paling relevan (longest prefix match) untuk dijadikan activePath.
 * Return null jika tidak ada yang cocok.
 */
export function getActiveMenuHref(
  pathname: string,
  menuItems: ReadonlyArray<Pick<MenuItem, 'href'>> = MENU_ITEMS
): string | null {
  const current = normalizeMenuPath(pathname);
  if (current === '/') return null;

  let bestHref: string | null = null;
  let bestLen = -1;

  for (const item of menuItems) {
    if (!item?.href) continue;
    if (!isMenuHrefActive(current, item.href)) continue;

    const normalizedHref = normalizeMenuPath(item.href);
    if (normalizedHref.length > bestLen) {
      bestLen = normalizedHref.length;
      bestHref = normalizedHref;
    }
  }

  return bestHref;
}
