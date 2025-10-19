# Daftar Komponen Reusable

## Navbar
**Lokasi:** `src/components/Navbar`  
**Kegunaan:** Navigation bar dengan logo, menu, dan info waktu (berdasarkan pattern rental repo)  
**Props:** Tidak ada props (menggunakan context dan hooks internal)

**Design Features:**
- Fixed positioning dengan backdrop blur
- Logo Qalbyy dengan gradient background
- Desktop navigation dengan active states
- Mobile menu button yang terintegrasi dengan sidebar
- Islamic time info di desktop
- Brand color hijau konsisten

**Contoh Penggunaan:**
```tsx
// Otomatis digunakan di Layout component
<Layout>
  {/* Content */}
</Layout>
```

## Sidebar
**Lokasi:** `src/components/Sidebar`  
**Kegunaan:** Sidebar navigation dengan minimize/expand functionality (berdasarkan pattern rental repo)  
**Props:** Tidak ada props (menggunakan context dan hooks internal)

**Design Features:**
- Collapsible sidebar (minimize/expand untuk desktop)
- Mobile overlay dengan backdrop blur
- Islamic greeting section
- Menu items dengan enabled/disabled states
- Active state indicators
- Smooth transitions dan animations
- Islamic footer dengan doa

**Contoh Penggunaan:**
```tsx
// Otomatis digunakan di Layout component
<Layout>
  {/* Content */}
</Layout>
```

## Layout
**Lokasi:** `src/components/Layout`  
**Kegunaan:** Layout wrapper dengan navbar, sidebar, dan responsive behavior  
**Props:**
- `children: React.ReactNode` - Konten yang akan dibungkus
- `className?: string` - CSS class tambahan
- `showNavbar?: boolean` - Tampilkan navbar (default: true)
- `showSidebar?: boolean` - Tampilkan sidebar (default: true)

**Design Features:**
- Automatic navbar dan sidebar integration
- Responsive margin adjustment untuk sidebar
- Smooth transitions saat sidebar minimize/expand
- Mobile-first responsive behavior
- Container dengan max-width dan proper padding

**Contoh Penggunaan:**
```tsx
<Layout>
  <div>Konten halaman</div>
</Layout>

// Atau dengan custom props
<Layout showSidebar={false}>
  <div>Halaman tanpa sidebar</div>
</Layout>
```

## SidebarContext
**Lokasi:** `src/contexts/SidebarContext`  
**Kegunaan:** Context untuk state management sidebar (minimize/expand, mobile open/close)  
**Provider:** SidebarProvider (sudah di-wrap di RootLayout)

**Available Hooks:**
```tsx
const {
  isDesktopMinimized,
  toggleDesktopMinimize,
  isMobileOpen,
  setIsMobileOpen,
  toggleMobile
} = useSidebar();
```

## LoadingSpinner
**Lokasi:** `src/components/LoadingSpinner`  
**Kegunaan:** Loading spinner dengan text dan brand color hijau  
**Props:**
- `size?: 'sm' | 'md' | 'lg'` - Ukuran spinner (default: 'md')
- `className?: string` - CSS class tambahan
- `text?: string` - Text yang ditampilkan di bawah spinner (default: 'Memuat...')

**Design Features:**
- Brand color hijau untuk spinner
- Animated text dengan pulse effect
- Flexible sizing

**Contoh Penggunaan:**
```tsx
<LoadingSpinner size="lg" text="Memuat ayat-ayat Al-Quran..." />
```

## MenuCard
**Lokasi:** `src/components/MenuCard`  
**Kegunaan:** Card modern untuk menampilkan menu utama aplikasi  
**Props:**
- `item: MenuItem` - Data menu dengan icon, colors, dan status

**Design Features:**
- Modern card design dengan gradients
- Lucide-react icons
- Enabled/disabled states dengan visual feedback
- Hover animations dan scale effects
- Mobile-optimized touch targets
- Brand color hijau untuk active items

**Contoh Penggunaan:**
```tsx
<MenuCard item={menuItem} />
```

## SuratCard
**Lokasi:** `src/components/SuratCard`  
**Kegunaan:** Card modern untuk menampilkan informasi surat Al-Quran  
**Props:**
- `surat: Surat` - Data surat yang akan ditampilkan

**Design Features:**
- Modern card layout dengan gradient badges
- Arabic text dengan proper typography
- Meta information dengan colored tags
- ChevronRight icon untuk navigation hint
- Hover effects dengan scale animation
- Mobile-responsive layout

**Contoh Penggunaan:**
```tsx
<SuratCard surat={suratData} />
```

## AudioPlayer
**Lokasi:** `src/components/AudioPlayer`  
**Kegunaan:** Audio player lengkap untuk memutar surat Al-Quran dengan berbagai qari  
**Props:**
- `audioSources: Record<string, string>` - URL audio dari berbagai qari
- `title: string` - Judul audio yang diputar
- `subtitle?: string` - Subtitle opsional
- `autoPlay?: boolean` - Auto play saat component dimount (default: false)
- `className?: string` - CSS class tambahan

**Design Features:**
- Modern audio player dengan gradient design
- Dropdown pemilihan qari (5 qari tersedia)
- Progress bar dengan custom styling
- Play/pause, restart, mute controls
- Loading states dan error handling
- Mobile-optimized touch controls

**Contoh Penggunaan:**
```tsx
<AudioPlayer
  audioSources={suratData.audioFull}
  title={`Audio Surat ${suratData.namaLatin}`}
  subtitle="Dengarkan surat lengkap"
/>
```

## AyatAudioPlayer
**Lokasi:** `src/components/AudioPlayer/AyatAudioPlayer`  
**Kegunaan:** Audio player compact untuk audio per ayat  
**Props:**
- `audioSources: Record<string, string>` - URL audio ayat dari berbagai qari
- `ayatNumber: number` - Nomor ayat
- `selectedQari?: string` - Qari yang dipilih (default: '01')
- `className?: string` - CSS class tambahan

**Design Features:**
- Compact design untuk per ayat
- Play/pause dan restart controls
- Loading indicator
- Error handling
- Konsisten dengan qari selection dari main player

**Contoh Penggunaan:**
```tsx
<AyatAudioPlayer
  audioSources={ayat.audio}
  ayatNumber={ayat.nomorAyat}
  selectedQari="01"
/>
```

## AddToHomescreen
**Lokasi:** `src/components/AddToHomescreen`  
**Kegunaan:** Komponen untuk menampilkan tombol dan prompt install aplikasi ke homescreen  
**Props:**
- `className?: string` - CSS class tambahan

**Design Features:**
- Auto-detect device capabilities (iOS vs Android/Chrome)
- BeforeInstallPrompt event handling untuk Android/Chrome
- Custom iOS instructions modal
- Install progress tracking
- Automatic hiding saat sudah dalam standalone mode
- Modern modal design dengan instructions

**Browser Support:**
- ✅ Android Chrome: Native install prompt
- ✅ iOS Safari: Manual instructions dengan modal
- ✅ Desktop Chrome/Edge: Native install prompt
- ✅ Auto-hide saat sudah installed (standalone mode)

**Contoh Penggunaan:**
```tsx
// Sudah terintegrasi di Sidebar
<AddToHomescreen />
```

**Features:**
- Deteksi otomatis platform (iOS/Android/Desktop)
- Install prompt native untuk browser yang support
- Modal instruksi manual untuk iOS
- Tracking status instalasi
- UI/UX yang user-friendly

## PremiumLoading
**Lokasi:** `src/components/PremiumLoading`  
**Kegunaan:** Premium loading component dengan heartbeat animation dan branding customization  
**Props:**
- `message?: string` - Pesan loading (default: 'Memuat...')
- `size?: 'sm' | 'md' | 'lg' | 'xl'` - Ukuran komponen (default: 'lg')
- `className?: string` - CSS class tambahan
- `fullscreen?: boolean` - Tampilkan sebagai fullscreen overlay (default: true)
- `showProgress?: boolean` - Tampilkan progress bar (default: false)
- `progress?: number` - Persentase progress (0-100)
- `logo?: string` - URL logo
- `logoAlt?: string` - Alt text untuk logo (default: 'Logo')
- `primaryColor?: string` - Warna brand utama (default: 'green')
- `secondaryColor?: string` - Warna brand sekunder (default: 'emerald')
- `subMessage?: string` - Pesan loading tambahan (default: 'Mohon tunggu sebentar...')

**Design Features:**
- Heartbeat animation dengan multiple layers
- Dynamic branding dengan warna customizable
- Multiple sizes (sm, md, lg, xl)
- Progress bar dengan smooth transitions
- Fullscreen overlay atau inline component
- Responsive design untuk semua ukuran layar
- Accessibility dengan ARIA labels
- 5 color schemes predefined (blue, amber, green, purple, red)

**Contoh Penggunaan:**
```tsx
// Basic usage
<PremiumLoading />

// Dengan custom branding
<PremiumLoading
  message="Selamat Datang di Qalbyy"
  subMessage="Menyiapkan pengalaman terbaik untuk Anda..."
  logo="/Qalbyy-logo-black.png"
  logoAlt="Qalbyy"
  primaryColor="green"
  secondaryColor="emerald"
  size="xl"
/>

// Dengan progress bar
<PremiumLoading
  message="Memuat data..."
  showProgress={true}
  progress={progress}
  primaryColor="green"
/>

// Inline loading (tidak fullscreen)
<PremiumLoading
  fullscreen={false}
  message="Memproses..."
  primaryColor="green"
  size="md"
/>
```

## AppLoading
**Lokasi:** `src/components/AppLoading`  
**Kegunaan:** Wrapper untuk PremiumLoading dengan konfigurasi default Qalbyy branding  
**Props:**
- `isLoading: boolean` - Status loading (required)
- `message?: string` - Pesan loading (default: 'Memuat aplikasi...')
- `progress?: number` - Persentase progress (0-100)
- `showProgress?: boolean` - Tampilkan progress bar (default: false)

**Design Features:**
- Pre-configured dengan branding Qalbyy (logo hijau)
- Easy-to-use wrapper untuk implementasi cepat
- Progress bar support
- Auto-hide saat loading selesai

**Contoh Penggunaan:**
```tsx
// Basic usage dengan progress
const [isLoading, setIsLoading] = useState(true);
const [progress, setProgress] = useState(0);

<AppLoading
  isLoading={isLoading}
  message="Menyiapkan Qalbyy untuk Anda..."
  progress={progress}
  showProgress={true}
/>

// Simple loading tanpa progress
<AppLoading
  isLoading={isLoading}
  message="Memuat data..."
/>
```