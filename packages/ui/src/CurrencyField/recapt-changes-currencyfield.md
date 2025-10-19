# Rekap Perubahan: CurrencyField

- Lokasi Komponen: `packages/ui/src/CurrencyField/CurrencyField.tsx`
- Lokasi Rekap: `packages/ui/src/CurrencyField/recapt-changes-currencyfield.md`
- Tipe: Komponen reusable

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-17 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas setelah `'use client'`.
- Lokasi Kode: Baris 2.
- Detail Perubahan:
  - Before:
    ```tsx
    'use client';

    import React, { useState, useEffect } from 'react';
    ```
  - After:
    ```tsx
    'use client';
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-currencyfield.md' pada folder komponen ini (packages/ui/src/CurrencyField). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

    import React, { useState, useEffect } from 'react';
    ```
- Alasan: Menjamin audit perubahan pada komponen input mata uang.
- Dampak: Non-fungsional.
- Verifikasi: Build sukses.

## Template Entri
- Tanggal/Waktu:
- Ringkasan:
- Lokasi Kode:
- Detail:
- Alasan:
- Dampak & Mitigasi:
- Verifikasi: