# Rekap Penggunaan Screens di App Folders

Tujuan: Mengidentifikasi screen di setiap modul yang **dipakai** atau **tidak dipakai** oleh file-file di folder `src/app` masing-masing modul.

Catatan Metodologi:
- Hanya memeriksa **import langsung** dari `src/app` ke `src/screens` pada masing-masing modul.
- Jika sebuah screen digunakan secara tidak langsung lewat komponen lain, itu **tidak** termasuk sebagai “dipakai” dalam rekap ini.
- Alias impor yang terdeteksi: `#/screens/...`.

## Modul: apps/umroh
- Folder diperiksa: `apps/umroh/src/app` → referensi ke `apps/umroh/src/screens`
- Screens tersedia:
  - `Alquran/AlquranScreen.tsx`
  - `AlquranDetail/AlquranDetailScreen.tsx`
  - `Doa/DoaScreen.tsx`
  - `DoaDetail/DoaDetailScreen.tsx`
  - `landingpage/LandingPageScreen.tsx`
  - `landingpage/About/AboutScreen.tsx`
  - `landingpage/Contact/ContactScreen.tsx`
  - `landingpage/Haji/HajiScreen.tsx`
  - `landingpage/Umroh/UmrohScreen.tsx`

- Screens yang **dipakai** oleh `src/app`:
  - `landingpage/LandingPageScreen.tsx` (digunakan di `(landingpage)/page.tsx`)
  - `landingpage/About/AboutScreen.tsx` (digunakan di `(landingpage)/about/page.tsx`)
  - `landingpage/Contact/ContactScreen.tsx` (digunakan di `(landingpage)/contact/page.tsx`)
  - `landingpage/Haji/HajiScreen.tsx` (digunakan di `(landingpage)/haji/page.tsx`)
  - `landingpage/Umroh/UmrohScreen.tsx` (digunakan di `(landingpage)/umroh/page.tsx`)

- Screens yang **tidak dipakai** oleh `src/app`:
  - `Alquran/AlquranScreen.tsx`
  - `AlquranDetail/AlquranDetailScreen.tsx`
  - `Doa/DoaScreen.tsx`
  - `DoaDetail/DoaDetailScreen.tsx`

## Modul: apps/quran-digital
- Folder diperiksa: `apps/quran-digital/src/app` → referensi ke `apps/quran-digital/src/screens`
- Screens tersedia:
  - `Alquran/AlquranScreen.tsx`
  - `AlquranDetail/AlquranDetailScreen.tsx`
  - `Doa/DoaScreen.tsx`
  - `DoaDetail/DoaDetailScreen.tsx`
  - `Home/HomeScreen.tsx`

- Screens yang **dipakai** oleh `src/app`:
  - `Home/HomeScreen.tsx` (digunakan di `(app)/page.tsx`)
  - `Alquran/AlquranScreen.tsx` (digunakan di `(app)/alquran/page.tsx`)
  - `AlquranDetail/AlquranDetailScreen.tsx` (digunakan di `(app)/alquran/[id]/page.tsx`)
  - `Doa/DoaScreen.tsx` (digunakan di `(app)/doa/page.tsx`)
  - `DoaDetail/DoaDetailScreen.tsx` (digunakan di `(app)/doa/[id]/page.tsx`)

- Screens yang **tidak dipakai** oleh `src/app`:
  - Tidak ada — semua screen di atas digunakan.

## Rekomendasi (opsional)
- Jika tujuan Anda adalah merapikan modul, screens yang tidak dipakai di `apps/umroh` dapat dipindah ke modul lain, dihapus, atau diberi tanda deprecated sesuai kebutuhan.
- Pertimbangkan menambahkan tes atau lint rules untuk mendeteksi import yang tidak digunakan atau direktori yang tidak direferensikan oleh `src/app` agar rekap semacam ini bisa otomatis.

---

## Komponen Tidak Dipakai — apps/umroh/src/components

Sesuai klarifikasi Anda, saat ini hanya `apps/umroh/src/screens/landingpage/*` yang digunakan. Berikut pemetaan komponen yang terpakai vs tidak terpakai di `apps/umroh/src/components` berdasarkan impor aktual dari `src/app` dan `src/screens/landingpage/*`:

- Komponen yang dipakai:
  - `#/components/Breadcrumbs` (dipakai di `About`, `Contact`, `Haji`, `Umroh` serta `#/hooks/useBreadcrumbs`)
  - `#/components/LandingPage/Navbar` (dipakai di `src/app/(landingpage)/layout.tsx`)
  - `#/components/LandingPage/HeroLandingSection`
  - `#/components/LandingPage/StatsLandingSection`
  - `#/components/LandingPage/ServicesLandingSection`
  - `#/components/LandingPage/FeaturesLandingSection`
  - `#/components/LandingPage/GalleryLandingSection`
  - `#/components/LandingPage/TestimonialsSection`
  - `#/components/LandingPage/CTALandingSection`
  - `#/components/LandingPage/WhatsAppButton` (dipakai sebagai `FloatingActionButtons` via aggregator)

- Komponen yang tidak dipakai (aman untuk dibersihkan jika tidak ada rencana pemakaian):
  - Root `components/*`:
    - `AddToHomescreen`
    - `AppLoading`
    - `AudioPlayer` dan `AudioPlayer/AyatAudioPlayer`
    - `DoaCard`
    - `FloatingActionButtons` (versi root, berbeda dari yang di-eksport oleh `LandingPage/WhatsAppButton`)
    - `Layout` dan `Layout/LayoutWrapper`
    - `LoadingSkeleton`
    - `LoadingSpinner`
    - `MenuCard`
    - `Navbar` (versi root, bukan `LandingPage/Navbar`)
    - `PremiumLoading`
    - `QariDrawer`
    - `SearchableDropdown`
    - `Sidebar`
    - `SurahNavigation`
    - `SurahSelector`
    - `SuratCard`
  - Sub-komponen di `components/LandingPage` yang tidak dipakai oleh layar landingpage saat ini:
    - `HeroSection`
    - `ServiceCard`
    - `PackageCard`
    - `TestimonialCard`
    - `ContactForm`
    - `StatsSection`
    - `FeatureSection`
    - `CTAButton`
    - `TrustBadge`

Catatan dan verifikasi:
- `Sidebar` dan `AddToHomescreen` hanya muncul sebagai impor di `LayoutWrapper`, sementara `LayoutWrapper` tidak dipakai oleh layout Next.js saat ini. Artinya keduanya tidak terpakai.
- `Breadcrumbs` dipakai aktif; jangan dihapus.
- Verifikasi cepat bisa dilakukan dengan perintah pencarian: `rg -n "from '#/components/" apps/umroh/src` untuk melihat semua impor komponen aktif.