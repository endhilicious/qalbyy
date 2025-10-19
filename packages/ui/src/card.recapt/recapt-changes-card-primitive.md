# Rekap Perubahan: Card Primitive (packages/ui/src/card.tsx)

- Lokasi Komponen: `packages/ui/src/card.tsx`
- Lokasi Rekap: `packages/ui/src/card.recapt/recapt-changes-card-primitive.md`
- Tipe: Primitive reusable

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-18 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas di baris paling atas file.
- Lokasi Kode: Baris 1.
- Detail Perubahan:
  - Before:
    ```tsx
    import * as React from "react";
    ```
  - After:
    ```tsx
    // PENTING: Primitive reusable ini digunakan luas. Setiap perubahan WAJIB direkap di 'card.recapt/recapt-changes-card-primitive.md'. Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Review ekstra hati-hati sebelum merge.
    import * as React from "react";
    ```
- Alasan: Card adalah primitive yang dipakai lintas komponen.
- Dampak: Non-fungsional.

## Template Entri Perubahan
- Tanggal/Waktu:
- Ringkasan:
- Lokasi Kode:
- Detail:
- Alasan:
- Dampak & Mitigasi:
- Verifikasi: