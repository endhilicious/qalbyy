# Rekap Perubahan: Sidebar

- Lokasi Komponen: `packages/ui/src/Sidebar/Sidebar.tsx`
- Lokasi Rekap: `packages/ui/src/Sidebar/recapt-changes-sidebar.md`
- Tipe: Komponen reusable

## Perubahan 1 — Penambahan Prosedur Rekap & Reminder di Header File
- Tanggal/Waktu: 2025-10-18 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat di header & menyiapkan file rekap.
- Lokasi Kode: Baris 1.
- Detail Perubahan:
  - After (komentar yang ditambahkan):
    ```tsx
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-sidebar.md' pada folder komponen ini (packages/ui/src/Sidebar). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
    ```
- Alasan: Navigasi samping berdampak pada struktur dan akses konten.
- Dampak: Non-fungsional.

## Template Entri Perubahan
- Tanggal/Waktu:
- Ringkasan:
- Lokasi Kode:
- Detail:
- Alasan:
- Dampak & Mitigasi:
- Verifikasi:

## Perubahan — Tambah Gap Ikon dan Teks pada Item Sidebar
- Tanggal/Waktu: 2025-10-19 (UTC+7)
- Lokasi: `packages/ui/src/Sidebar/Sidebar.tsx` baris 178–191 (deklarasi `itemClasses`)
- Ringkasan: Menambahkan `${!collapsed ? "gap-3" : ""}` ke container item (flex) agar ada jarak konsisten antara ikon dan teks saat sidebar tidak dalam keadaan collapsed.
- Alasan: Pada beberapa viewport, item sidebar terlihat tanpa jarak sehingga teks menempel pada ikon.
- Dampak: Visual improvement; tidak mengubah API atau perilaku navigasi.
- Verifikasi: Pratinjau menunjukkan jarak ikon–teks sudah konsisten di desktop dan mobile.