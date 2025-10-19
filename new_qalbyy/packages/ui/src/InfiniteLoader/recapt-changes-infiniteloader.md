# Rekap Perubahan: InfiniteLoader

- Lokasi Komponen: `packages/ui/src/InfiniteLoader/InfiniteLoader.tsx`
- Lokasi Rekap: `packages/ui/src/InfiniteLoader/recapt-changes-infiniteloader.md`
- Tipe: Komponen reusable

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-18 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas di baris paling atas file.
- Lokasi Kode: Baris 1.
- Detail Perubahan:
  - Before:
    ```tsx
    import type { ReactNode } from "react";
    ```
  - After:
    ```tsx
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-infiniteloader.md' pada folder komponen ini (packages/ui/src/InfiniteLoader). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
    import type { ReactNode } from "react";
    ```
- Alasan: Mewajibkan audit perubahan pada komponen list loader.
- Dampak: Non-fungsional.
- Verifikasi: Build sukses.

## Template Entri Perubahan
- Tanggal/Waktu:
- Ringkasan:
- Lokasi Kode:
- Detail:
- Alasan:
- Dampak & Mitigasi:
- Verifikasi: