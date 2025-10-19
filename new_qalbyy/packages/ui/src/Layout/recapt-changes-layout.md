# Rekap Perubahan: Layout

- Lokasi Komponen: `packages/ui/src/Layout/Layout.tsx`
- Lokasi Rekap: `packages/ui/src/Layout/recapt-changes-layout.md`
- Tipe: Komponen reusable

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-18 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas setelah directive `"use client"`.
- Lokasi Kode: Baris 2.
- Detail Perubahan:
  - Before:
    ```tsx
    "use client";
    import { ReactNode } from "react";
    ```
  - After:
    ```tsx
    "use client";
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-layout.md' pada folder komponen ini (packages/ui/src/Layout). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
    import { ReactNode } from "react";
    ```
- Alasan: Layout berdampak global; wajib diaudit.
- Dampak: Non-fungsional.

## Perubahan 2 — Callback perubahan sidebar mobile dipanggil saat state berubah
- Tanggal/Waktu: 2025-10-19 (UTC+7)
- Ringkasan: Memastikan `onMobileSidebarChange` dipanggil setiap kali state `isMobileSidebarOpen` berubah (buka/tutup) sehingga konsumen bisa mengunci scroll body dan mengatur efek backdrop dengan konsisten. Menambahkan handler `handleMobileMenuToggle` untuk konsistensi.
- Lokasi Kode: `Layout.tsx` sekitar baris 58–75 dan 165–175.
- Detail Perubahan:
  - Menambahkan `useEffect(() => { onMobileSidebarChange?.(isMobileSidebarOpen); }, [isMobileSidebarOpen, onMobileSidebarChange]);`
  - Mengganti inline toggle di `Header` menjadi `onMobileMenuToggle={handleMobileMenuToggle}`.
  - Menambahkan fungsi `handleMobileMenuToggle` yang hanya melakukan `setIsMobileSidebarOpen((prev) => !prev)`.
- Alasan: Sebelumnya callback hanya terpanggil saat close/resize sehingga body scroll tidak terkunci saat pertama kali membuka drawer.
- Dampak & Mitigasi: Tidak mengubah API publik; perilaku menjadi lebih konsisten pada mobile.
- Verifikasi: Drawer mobile memunculkan backdrop hitam semi-transparan dan body tidak dapat di-scroll ketika drawer terbuka.

## Perubahan 3 — Backdrop mobile ditingkatkan dan body scroll lock generik
- Tanggal/Waktu: 2025-10-19 (UTC+7)
- Ringkasan: Mengganti overlay menjadi `bg-black/50 backdrop-blur-sm z-[60]` agar selaras dengan kualitas UX `QariDrawer`, serta mengunci scroll body langsung dari Layout (tanpa bergantung wrapper) menggunakan `overflow: hidden`, `touch-action: none`, dan `overscroll-behavior: contain` saat drawer terbuka.
- Lokasi Kode: `Layout.tsx` baris sekitar 61–75 dan 158–170.
- Detail Perubahan:
  - Menambah logika lock scroll di dalam `useEffect` yang memantau `isMobileSidebarOpen`.
  - Mengubah kelas overlay untuk kualitas backdrop yang lebih baik dan z-index yang tepat.
- Alasan: Memastikan komponen benar-benar generic dan selalu menghadirkan backdrop yang menutupi halaman serta mencegah scroll ketika drawer aktif.
- Dampak & Mitigasi: Overlay tampil di atas konten (di bawah drawer), tidak mengubah API, kompatibel dengan aplikasi yang sudah menggunakan Layout.
- Verifikasi: Dibuka di preview; drawer mobile menunjukkan backdrop, konten belakang tidak bisa di-scroll.

## Perubahan 4 — Margin kiri konten pakai style inline berbasis viewport
- Tanggal/Waktu: 2025-10-19 (UTC+7)
- Ringkasan: Mengganti kelas Tailwind `lg:ml-32`/`lg:ml-64` pada container konten menjadi `style={{ marginLeft: ... }}` yang dihitung dari status `isCollapsed` dan ketersediaan viewport `lg` via `matchMedia`.
- Lokasi Kode: `Layout.tsx` sekitar baris 52 (state), 103–120 (effect matchMedia), dan 184–196 (penggantian container).
- Alasan: Pada beberapa kondisi, kelas `lg:ml-*` tidak efektif sehingga konten tertutupi oleh sidebar saat collapse. Style inline memastikan offset diterapkan konsisten.
- Dampak & Mitigasi: Tidak mengubah API publik. Animasi tetap melalui `transition-all`. Pada mobile (viewport < lg), marginLeft otomatis 0.
- Verifikasi: Pratinjau lokal menunjukkan konten tidak tertutup saat sidebar di-collapse/expand.
- Tanggal/Waktu: 2025-10-19 (UTC+7)
- Ringkasan: Mengganti padding-top statis `pt-20` di `<main>` dengan style `paddingTop: var(--header-height, 5rem)` sehingga konten otomatis memiliki jarak yang sesuai dengan tinggi header aktual.
- Lokasi Kode: `Layout.tsx` bagian `<main>`.
- Detail Perubahan:
  - Before: kelas `pt-20` (80px) hard-coded.
  - After: style inline `paddingTop: 'var(--header-height, 5rem)'` dengan fallback 80px.
- Alasan: Header memiliki tinggi dinamis (py + h-12 + custom actions). Padding statis kadang tidak cukup sehingga konten tertutup sebagian.
- Dampak & Mitigasi: Tidak mengubah API publik. SSR tetap aman dengan fallback 5rem. Dipasangkan dengan update di `Header` untuk menyetel CSS variable secara runtime.
- Verifikasi: Dibuka di preview. Konten tidak lagi berada di belakang header pada semua halaman.

## Perubahan 5 — Tambah gap ekstra di atas konten
- Tanggal/Waktu: 2025-10-19 (UTC+7)
- Ringkasan: Menambahkan jarak tambahan `1rem` pada `paddingTop` konten menggunakan `calc(var(--header-height, 5rem) + 1rem)` agar tidak berdempetan dengan header.
- Lokasi Kode: `Layout.tsx` bagian `<main>`.
- Alasan: Pada beberapa halaman, konten terasa terlalu dekat dengan header meski offset mengikuti tinggi header; tambahan gap meningkatkan keterbacaan.
- Dampak & Mitigasi: Tidak mengubah API publik. Fallback saat SSR tetap bekerja (`calc(5rem + 1rem)`).
- Verifikasi: Pratinjau menunjukkan jarak yang lebih nyaman antara header dan konten di halaman utama dan detail.

## Perubahan 6 — Naikkan gap ekstra menjadi 2rem
- Tanggal/Waktu: 2025-10-19 (UTC+7)
- Ringkasan: Meningkatkan jarak tambahan di atas konten dari `1rem` menjadi `2rem` menggunakan `paddingTop: calc(var(--header-height, 5rem) + 2rem)` agar tidak berdempetan dengan header.
- Lokasi Kode: `Layout.tsx` bagian `<main>`.
- Alasan: Feedback menyatakan jarak masih terlalu sempit; penambahan 2rem memberi ruang lebih nyaman.
- Dampak & Mitigasi: Tidak mengubah API publik. Bekerja dengan fallback saat SSR (`calc(5rem + 2rem)`).
- Verifikasi: Pratinjau menunjukkan spasi yang jelas antara header dan konten di berbagai halaman.