# Rekap Perubahan: Badge

- Lokasi Komponen: `packages/ui/src/Badge/Badge.tsx`
- Lokasi Rekap: `packages/ui/src/Badge/recapt-changes-badge.md`
- Tipe: Komponen reusable (dipakai lintas modul)

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-17 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas di bagian paling atas file agar setiap perubahan pada komponen ini direkap dengan lengkap.
- Lokasi Kode: Baris paling atas file (sebelum import pertama).
- Detail Perubahan:
  - Before:
    ```tsx
    import React from 'react';
    ```
  - After:
    ```tsx
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-badge.md' pada folder komponen ini (packages/ui/src/Badge). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
    import React from 'react';
    ```
- Alasan: Menetapkan disiplin perubahan pada komponen UI yang digunakan di banyak tempat untuk mencegah regresi dan memudahkan audit.
- Dampak: Tidak ada perubahan fungsional/visual. Hanya komentar.
- Verifikasi: Build monorepo berjalan tanpa error. Tidak ada perubahan perilaku di preview.

## Prosedur Pencatatan Perubahan Berikutnya
1. Tambahkan entri baru di dokumen ini setiap kali ada perubahan.
2. Cantumkan tanggal, bagian kode (baris/file), alasan, dampak, dan cara verifikasi.
3. Jika perubahan memengaruhi UI/UX, sertakan tangkapan layar dan jalur reproduksi.
4. Pastikan PR/commit menautkan ke entri ini.

## Template Entri Perubahan
- Tanggal/Waktu:
- Ringkasan:
- Lokasi Kode:
- Detail (cuplikan before/after atau penjelasan rinci):
- Alasan:
- Dampak & Mitigasi:
- Verifikasi: