# Rekap Perubahan: CheckboxField

- Lokasi Komponen: `packages/ui/src/CheckboxField/CheckboxField.tsx`
- Lokasi Rekap: `packages/ui/src/CheckboxField/recapt-changes-checkboxfield.md`
- Tipe: Komponen reusable

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-17 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas setelah `'use client'`.
- Lokasi Kode: Baris 2.
- Detail Perubahan:
  - Before:
    ```tsx
    'use client';

    import React, { useState } from 'react';
    ```
  - After:
    ```tsx
    'use client';
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-checkboxfield.md' pada folder komponen ini (packages/ui/src/CheckboxField). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

    import React, { useState } from 'react';
    ```
- Alasan: Menjaga konsistensi dan audit trail pada input form.
- Dampak: Non-fungsional.
- Verifikasi: Build sukses.

## Prosedur & Template
- Ikuti format: tanggal, lokasi kode, alasan, dampak, verifikasi.
- Template entri tersedia di bawah:
  - Tanggal/Waktu:
  - Ringkasan:
  - Lokasi Kode:
  - Detail:
  - Alasan:
  - Dampak & Mitigasi:
  - Verifikasi: