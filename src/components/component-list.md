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
