import { BookOpen, ScrollText, Heart, Circle, Clock, Compass, Calendar, Sparkles } from 'lucide-react';

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
