# Rekap Perubahan: InputEmail

- Lokasi Komponen: `packages/ui/src/InputEmail/InputEmail.tsx`
- Lokasi Rekap: `packages/ui/src/InputEmail/recapt-changes-inputemail.md`
- Tipe: Komponen reusable

## Perubahan 1 — Penambahan Reminder di Header File
- Tanggal/Waktu: 2025-10-18 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas di baris paling atas file.
- Lokasi Kode: Baris 1.
- Detail Perubahan:
  - Before:
    ```tsx
    import { forwardRef } from "react";
    ```
  - After:
    ```tsx
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-inputemail.md' pada folder komponen ini (packages/ui/src/InputEmail). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
    import { forwardRef } from "react";
    ```
- Alasan: Menghindari regresi pada input email yang sering dipakai.
- Dampak: Non-fungsional.

## Template Entri Perubahan
- Tanggal/Waktu:
- Ringkasan:
- Lokasi Kode:
- Detail:
- Alasan:
- Dampak & Mitigasi:
- Verifikasi: