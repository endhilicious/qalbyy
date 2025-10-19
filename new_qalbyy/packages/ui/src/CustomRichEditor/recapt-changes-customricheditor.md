# Rekap Perubahan: CustomRichEditor

- Lokasi Komponen: `packages/ui/src/CustomRichEditor/CustomRichEditor.tsx`
- Lokasi Rekap: `packages/ui/src/CustomRichEditor/recapt-changes-customricheditor.md`
- Tipe: Komponen reusable

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-17 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas setelah `'use client'`.
- Lokasi Kode: Baris 2.
- Detail Perubahan:
  - Before:
    ```tsx
    'use client';

    import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
    ```
  - After:
    ```tsx
    'use client';
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-customricheditor.md' pada folder komponen ini (packages/ui/src/CustomRichEditor). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

    import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
    ```
- Alasan: Memastikan setiap perubahan editor tercatat dan ditinjau.
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