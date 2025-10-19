import { 
  Plane, 
  Home, 
  Users, 
  Globe, 
  Star, 
  Shield, 
  Clock, 
  CheckCircle,
  Award,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Heart,
  BookOpen
} from 'lucide-react';

// Landing page constants based on Annisa Travel and Pakem Tours references
// Mobile-first design with accessibility for elderly users

export const SERVICES = [
  {
    id: 'umroh',
    title: 'Paket Umroh',
    description: 'Perjalanan ibadah umroh dengan berbagai pilihan paket',
    icon: Home,
    href: '/umroh',
    features: ['9-12 hari', 'Harga transparan', 'Jadwal pasti']
  },
  {
    id: 'haji',
    title: 'Paket Haji',
    description: 'Program haji dengan pembiayaan syariah',
    icon: Globe,
    href: '/haji',
    features: ['Haji Furoda', 'Haji Plus', 'DP 10 juta']
  },
  {
    id: 'corporate',
    title: 'Corporate Travel',
    description: 'Perjalanan bisnis dan MICE',
    icon: Users,
    href: '/corporate',
    features: ['Meeting', 'Event', 'Wisata Halal']
  },
  {
    id: 'private',
    title: 'Umroh Private',
    description: 'Paket umroh custom sesuai kebutuhan',
    icon: Star,
    href: '/private',
    features: ['Custom jadwal', 'Pilih sendiri', 'Fleksibel']
  }
];

export const UMROH_PACKAGES = [
  {
    id: 'umroh-nobar-timnas',
    title: 'Umroh Plus Nobar Timnas vs Arab Saudi',
    description: 'Program unik gabungkan ibadah dengan nobar Timnas Indonesia',
    duration: '9 Hari',
    price: { from: 29000000, currency: 'IDR' },
    features: [
      'Nobar Timnas vs Arab Saudi di Jeddah Stadium',
      'FREE Kereta Cepat',
      'Visa umroh resmi',
      'Hotel bintang 4-5',
      'Makan 3x sehari',
      'Muthowif berpengalaman'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jakarta - Jeddah - Mekkah',
        activities: ['Keberangkatan', 'Tiba di Jeddah', 'Transfer ke Mekkah'],
        location: 'Mekkah'
      },
      {
        day: 2,
        title: 'Mekkah',
        activities: ['Tawaf', 'Sa\'i', 'Ibadah di Masjidil Haram'],
        location: 'Mekkah'
      }
    ],
    isSpecial: true,
    specialBadge: 'EXCLUSIVE',
    image: '/umroh-mock-pic/gambar-1.jpg',
    category: 'umroh' as const
  },
  {
    id: 'umroh-private',
    title: 'Umroh Private Custom',
    description: 'Tentukan sendiri jadwal, durasi, pesawat, hotel, dan transportasi',
    duration: 'Custom',
    price: { from: 35000000, currency: 'IDR' },
    features: [
      'Jadwal fleksibel',
      'Pilih pesawat sendiri',
      'Hotel pilihan',
      'Transportasi custom',
      'Guide pribadi',
      'Itinerary sesuai keinginan'
    ],
    itinerary: [],
    image: '/umroh-mock-pic/gambar-2.jpg',
    category: 'umroh' as const
  }
];

export const HAJI_PACKAGES = [
  {
    id: 'haji-furoda',
    title: 'Haji Furoda 2025',
    description: 'Program 21 hari tanpa apartment transit',
    duration: '21 Hari',
    price: { from: 85000000, currency: 'IDR' },
    features: [
      'Tanpa apartment transit',
      'Bimbingan ibadah profesional',
      'Pemeriksaan kesehatan',
      'Manasik haji lengkap',
      'Dokter berpengalaman',
      'Usia 18-65+ tahun'
    ],
    itinerary: [],
    image: '/umroh-mock-pic/gambar-3.jpg',
    category: 'haji' as const
  },
  {
    id: 'haji-plus-syariah',
    title: 'Haji Plus Pembiayaan Syariah',
    description: 'Daftar dengan DP hanya 10 juta',
    duration: 'Varies',
    price: { from: 10000000, currency: 'IDR' },
    features: [
      'DP 10 juta',
      'Pembiayaan syariah',
      'Tidak perlu tunggu dana terkumpul',
      'Proses mudah',
      'Nomor porsi langsung',
      'Cicilan fleksibel'
    ],
    itinerary: [],
    isSpecial: true,
    specialBadge: 'SYARIAH',
    image: '/umroh-mock-pic/gambar-4.jpg',
    category: 'haji' as const
  }
];

export const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    name: 'Amara Rachmasari',
    rating: 5,
    review: 'Sangat direkomendasikan bagi yang ingin menunaikan ibadah umroh maupun haji, karena pelayanannya luar biasa',
    avatar: '/umroh-mock-pic/gambar-5.jpg',
    package: 'Umroh Plus Nobar Timnas',
    date: '29 Agu 2025'
  },
  {
    id: 'testimonial-2',
    name: 'Budi Santoso',
    rating: 5,
    review: 'Pelayanan sangat memuaskan, harga transparan, dan jadwal pasti sesuai yang dijanjikan',
    avatar: '/umroh-mock-pic/gambar-6.jpg',
    package: 'Haji Furoda 2025',
    date: '15 Jul 2025'
  }
];

export const STATISTICS = [
  {
    id: 'clients',
    number: '35,000',
    label: 'Klien Dipercaya',
    suffix: '+'
  },
  {
    id: 'experience',
    number: '22',
    label: 'Tahun Pengalaman',
    suffix: '+'
  },
  {
    id: 'rating',
    number: '4.8',
    label: 'Rating Google',
    suffix: '/5'
  },
  {
    id: 'reviews',
    number: '322',
    label: 'Ulasan Positif',
    suffix: '+'
  }
];

export const FEATURES = [
  {
    id: 'transparent-pricing',
    title: 'Harga Transparan',
    description: 'Tanpa biaya tersembunyi, semua harga sudah termasuk dalam paket',
    icon: Shield
  },
  {
    id: 'guaranteed-departure',
    title: 'Jadwal Pasti',
    description: 'Jaminan kepastian tanggal berangkat dengan booking jauh hari',
    icon: CheckCircle
  },
  {
    id: 'professional-guidance',
    title: 'Bimbingan Profesional',
    description: 'Muthowif dan pembimbing ibadah berpengalaman',
    icon: Users
  },
  {
    id: '24-7-support',
    title: 'Dukungan 24/7',
    description: 'Customer service siap membantu kapan saja',
    icon: Phone
  }
];

export const CERTIFICATIONS = [
  {
    id: 'iata',
    name: 'IATA',
    description: 'Terdaftar sebagai anggota IATA',
    logo: '/umroh-mock-pic/gambar-7.jpg',
    number: 'IATA Member'
  },
  {
    id: 'aitta',
    name: 'AITTA',
    description: 'Asosiasi Indonesian Travel & Tourism Agent',
    logo: '/umroh-mock-pic/gambar-8.jpg',
    number: 'AITTA Member'
  },
  {
    id: 'kemenag',
    name: 'Kemenag RI',
    description: 'Terdaftar di Kementerian Agama RI',
    logo: '/umroh-mock-pic/gambar-9.jpg',
    number: 'SK No 437 Tahun 2017'
  }
];

export const OFFICE_LOCATIONS = [
  {
    id: 'jakarta',
    city: 'Jakarta',
    address: 'Rukan Bisnis Park Kirana Cawang, Jl. DI Pandjaitan Kav. 48 Blok A5, Jakarta Timur',
    phone: '+62 811 1356 7777',
    isMain: true
  },
  {
    id: 'makassar',
    city: 'Makassar',
    address: 'Jl. Sultan Hasanuddin No. 123, Makassar, Sulawesi Selatan',
    phone: '+62 411 123 4567'
  },
  {
    id: 'pekanbaru',
    city: 'Pekanbaru',
    address: 'Jl. Sudirman No. 456, Pekanbaru, Riau',
    phone: '+62 761 987 6543'
  }
];

export const CONTACT_INFO = {
  phone: '+62 811 1356 7777',
  whatsapp: '+62 811 1356 7777',
  email: 'info@qalbyy.com',
  address: 'Jakarta, Indonesia',
  officeHours: 'Senin - Jumat: 08:00 - 17:00 WIB'
};

export const HERO_DATA = {
  headline: 'Solusi Terpercaya untuk Perjalanan Ibadah Anda',
  subheadline: '22+ tahun pengalaman melayani 35,000+ jamaah dengan pelayanan terbaik, harga transparan, dan jadwal pasti',
  ctaText: 'Lihat Paket',
  ctaSecondary: 'Konsultasi Gratis',
  backgroundImage: '/umroh-mock-pic/gambar-10.jpg',
  stats: STATISTICS
};
