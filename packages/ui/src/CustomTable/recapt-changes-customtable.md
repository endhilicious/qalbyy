# Rekap Perubahan: CustomTable

- Lokasi Komponen: `packages/ui/src/CustomTable/CustomTable.tsx`
- Lokasi Rekap: `packages/ui/src/CustomTable/recapt-changes-customtable.md`
- Tipe: Komponen reusable

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-17 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas setelah `"use client"`.
- Lokasi Kode: Baris 2.
- Detail Perubahan:
  - Before:
    ```tsx
    "use client";

    import React, { useState, useMemo, useCallback } from 'react';
    ```
  - After:
    ```tsx
    "use client";
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-customtable.md' pada folder komponen ini (packages/ui/src/CustomTable). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

    import React, { useState, useMemo, useCallback } from 'react';
    ```
- Alasan: Menghindari perubahan tak terdokumentasi pada tabel yang digunakan banyak halaman.
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