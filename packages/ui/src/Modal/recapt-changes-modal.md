# Rekap Perubahan: Modal

- Lokasi Komponen: `packages/ui/src/Modal/Modal.tsx`
- Lokasi Rekap: `packages/ui/src/Modal/recapt-changes-modal.md`
- Tipe: Komponen reusable

## Perubahan 1 — Penambahan Prosedur Rekap & Reminder di Header File
- Tanggal/Waktu: 2025-10-18 (UTC+7)
- Ringkasan: Menambahkan komentar pengingat tegas di header & menyiapkan file rekap.
- Lokasi Kode: Baris 1.
- Detail Perubahan:
  - After (komentar yang ditambahkan):
    ```tsx
    // PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-modal.md' pada folder komponen ini (packages/ui/src/Modal). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
    ```
- Alasan: Modal berdampak ke pola interaksi utama pengguna.
- Dampak: Non-fungsional.

## Perubahan 2 — Fallback maxWidth via inline style
- Tanggal/Waktu: 2025-10-19 (UTC+7)
- Ringkasan: Menambahkan fallback inline style `maxWidth` untuk memastikan ukuran modal (`sm`–`2xl`) tetap diterapkan walau utilitas Tailwind `max-w-*` tidak tersedia di build consumer.
- Lokasi Kode: Penambahan mapping `sizeMaxPx` (sekitar baris 79–90) dan penambahan `style={{ maxWidth: ... }}` pada elemen modal container (sekitar baris 120–130).
- Detail Perubahan:
  - Mapping:
    ```ts
    const sizeMaxPx = { sm: 384, md: 448, lg: 512, xl: 576, "2xl": 672, full: undefined };
    ```
  - Penerapan:
    ```tsx
    <div ... style={{ maxWidth: sizeMaxPx[size] ? `${sizeMaxPx[size]}px` : undefined }}>
    ```
- Alasan: Di lingkungan `apps/quran-digital`, kelas `max-w-sm` tidak muncul di CSS build sehingga modal menjadi terlalu lebar (mengikuti `w-full`). Fallback memastikan perilaku konsisten lintas aplikasi.
- Dampak & Mitigasi: Perubahan non-breaking, kompatibel dengan `className`. Jika Tailwind utilitas tersedia, keduanya tetap harmonis karena `maxWidth` inline memiliki prioritas yang memaksa batas maksimum.
- Verifikasi: Preview modal `AddToHomescreen` menunjukkan ukuran kecil sesuai `size="sm"` tanpa error.

## Template Entri Perubahan
- Tanggal/Waktu:
- Ringkasan:
- Lokasi Kode:
- Detail:
- Alasan:
- Dampak & Mitigasi:
- Verifikasi: