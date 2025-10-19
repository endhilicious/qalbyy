# Rekap Perubahan: Card

- Lokasi Komponen: `packages/ui/src/Card/Card.tsx`
- Lokasi Rekap: `packages/ui/src/Card/recapt-changes-card.md`
- Tipe: Komponen reusable (dipakai lintas modul)

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-17 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas setelah directive `'use client'` agar tidak mengganggu Next.js.
- Lokasi Kode: Baris 2 (setelah `'use client'`).
- Detail Perubahan:
  - Before:
    ```tsx
    'use client';

    import React from 'react';
    ```
  - After:
    ```tsx
    'use client';
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-card.md' pada folder komponen ini (packages/ui/src/Card). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

    import React from 'react';
    ```
- Alasan: Menetapkan disiplin perubahan pada komponen layout dasar agar tidak menimbulkan regresi luas.
- Dampak: Tidak ada perubahan fungsional/visual.
- Verifikasi: Build workspace sukses; tidak ada error di dev server.

## Prosedur Pencatatan Perubahan Berikutnya
1. Catat perubahan dengan alasan, dampak, dan verifikasi.
2. Sertakan cuplikan kode (before/after) jika mengubah struktur/props.
3. Pastikan PR mengacu ke entri ini.

## Template Entri Perubahan
- Tanggal/Waktu:
- Ringkasan:
- Lokasi Kode:
- Detail:
- Alasan:
- Dampak & Mitigasi:
- Verifikasi: