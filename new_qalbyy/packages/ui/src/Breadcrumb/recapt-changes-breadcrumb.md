# Rekap Perubahan: Breadcrumb

- Lokasi Komponen: `packages/ui/src/Breadcrumb/Breadcrumb.tsx`
- Lokasi Rekap: `packages/ui/src/Breadcrumb/recapt-changes-breadcrumb.md`
- Tipe: Komponen reusable (dipakai lintas modul)

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-17 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas di baris paling atas file.
- Lokasi Kode: Baris 1.
- Detail Perubahan:
  - Before:
    ```tsx
    import React, { useState, useRef, useEffect } from 'react';
    ```
  - After:
    ```tsx
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-breadcrumb.md' pada folder komponen ini (packages/ui/src/Breadcrumb). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
    import React, { useState, useRef, useEffect } from 'react';
    ```
- Alasan: Memaksa pencatatan perubahan terstruktur untuk komponen yang berpotensi memengaruhi navigasi aplikasi.
- Dampak: Tidak ada perubahan fungsional/visual.
- Verifikasi: Build monorepo sukses.

## Prosedur Pencatatan Perubahan Berikutnya
1. Dokumentasikan setiap perubahan dengan alasan dan dampak.
2. Sertakan cuplikan kode sebelum/sesudah jika relevan.
3. Tautkan PR ke entri ini.

## Template Entri Perubahan
- Tanggal/Waktu:
- Ringkasan:
- Lokasi Kode:
- Detail:
- Alasan:
- Dampak & Mitigasi:
- Verifikasi: