# Rekap Perubahan: InputPassword

- Lokasi Komponen: `packages/ui/src/InputPassword/InputPassword.tsx`
- Lokasi Rekap: `packages/ui/src/InputPassword/recapt-changes-inputpassword.md`
- Tipe: Komponen reusable

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-18 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas di baris paling atas file.
- Lokasi Kode: Baris 1.
- Detail Perubahan:
  - Before:
    ```tsx
    import { forwardRef, useState } from "react";
    ```
  - After:
    ```tsx
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-inputpassword.md' pada folder komponen ini (packages/ui/src/InputPassword). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
    import { forwardRef, useState } from "react";
    ```
- Alasan: Menjaga keamanan dan konsistensi perilaku input password.
- Dampak: Non-fungsional.

## Template Entri Perubahan
- Tanggal/Waktu:
- Ringkasan:
- Lokasi Kode:
- Detail:
- Alasan:
- Dampak & Mitigasi:
- Verifikasi: