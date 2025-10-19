# Rekap Perubahan: Button Primitive (packages/ui/src/button.tsx)

- Lokasi Komponen: `packages/ui/src/button.tsx`
- Lokasi Rekap: `packages/ui/src/button.recapt/recapt-changes-button.md`
- Tipe: Primitive reusable

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-18 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas setelah directive `"use client"`.
- Lokasi Kode: Baris 2.
- Detail Perubahan:
  - Before:
    ```tsx
    "use client";
    import * as React from "react";
    ```
  - After:
    ```tsx
    "use client";
    // PENTING: Primitive reusable ini digunakan luas. Setiap perubahan WAJIB direkap di 'button.recapt/recapt-changes-button.md'. Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Review ekstra hati-hati sebelum merge.
    import * as React from "react";
    ```
- Alasan: Button sebagai primitive dipakai di banyak komponen.
- Dampak: Non-fungsional.

## Template Entri Perubahan
- Tanggal/Waktu:
- Ringkasan:
- Lokasi Kode:
- Detail:
- Alasan:
- Dampak & Mitigasi:
- Verifikasi: