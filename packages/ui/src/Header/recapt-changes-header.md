# Rekap Perubahan: Header

- Lokasi Komponen: `packages/ui/src/Header/Header.tsx` dan `packages/ui/src/Header/NotificationDrawer.tsx`
- Lokasi Rekap: `packages/ui/src/Header/recapt-changes-header.md`
- Tipe: Komponen reusable (Header dan laci notifikasi)

## Perubahan 1 — Penambahan Reminder di Header File (Header.tsx)
- Tanggal/Waktu: 2025-10-18 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas setelah `'use client'`.
- Lokasi Kode: Baris 2 di `Header.tsx`.
- Detail Perubahan:
  - Before:
    ```tsx
    "use client";

    import React, { useState, useRef, useEffect } from "react";
    ```
  - After:
    ```tsx
    "use client";
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-header.md' pada folder komponen ini (packages/ui/src/Header). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

    import React, { useState, useRef, useEffect } from "react";
    ```
- Alasan: Menghindari perubahan tak terdokumentasi pada komponen global.
- Dampak: Non-fungsional.

## Perubahan 2 — Penambahan Reminder di Header File (NotificationDrawer.tsx)
- Tanggal/Waktu: 2025-10-18 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas setelah `'use client'`.
- Lokasi Kode: Baris 2 di `NotificationDrawer.tsx`.
- Detail Perubahan:
  - Before:
    ```tsx
    'use client'

    import React, { useState } from 'react'
    ```
  - After:
    ```tsx
    'use client'
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-header.md' pada folder komponen ini (packages/ui/src/Header). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

    import React, { useState } from 'react'
    ```
- Alasan: Menjaga konsistensi dokumentasi di sub-komponen Header.
- Dampak: Non-fungsional.

## Perubahan 2 — Menyetel CSS variable tinggi header
- Tanggal/Waktu: 2025-10-19 (UTC+7)
- Ringkasan: Menambahkan `ref` pada elemen `<header>` dan `useEffect` untuk mengukur `offsetHeight` lalu menyetel `--header-height` di `document.documentElement`. Variable ini digunakan oleh Layout agar padding konten mengikuti tinggi header aktual.
- Lokasi Kode: `Header.tsx` bagian deklarasi `headerRef` dan efek `updateHeaderHeightVar`.
- Alasan: Mengatasi masalah konten tertutup sebagian oleh header saat tinggi header berubah (mis. ada custom actions).
- Dampak & Mitigasi: Tidak mengubah API publik. Menggunakan fallback 5rem di Layout jika variable belum tersedia saat SSR.
- Verifikasi: Pratinjau aplikasi menunjukkan konten tidak lagi berada di belakang header pada berbagai halaman.
- Detail:
- Alasan:
- Dampak & Mitigasi:
- Verifikasi:

## Perubahan 3 — Penyesuaian Z-Index Header
- Tanggal/Waktu: 2025-10-19 (UTC+7)
- Ringkasan: Mengubah z-index header dari `z-30` menjadi `z-[50]` pada `headerClasses` agar header selalu berada di atas konten (termasuk card yang menggunakan `transform`), namun tetap di bawah Sidebar (`z-[70]`) dan overlay Modal/Notification (`z-[9998]`/`z-[9999]`).
- Lokasi Kode: `packages/ui/src/Header/Header.tsx` bagian deklarasi `headerClasses`.
- Alasan: Header tertutup oleh `MenuCard` saat scroll karena stacking context yang terbentuk dari `transform` pada card; peningkatan z-index memastikan urutan lapisan: Sidebar > Header > Konten.
- Dampak: Perubahan visual saja, tanpa mengubah API publik.
- Verifikasi: Pratinjau aplikasi menunjukkan header tidak lagi tertutup card di halaman beranda.