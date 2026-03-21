# Recap Perubahan — 2026-03-21 — iPhone Audio Fixes & A2HS Image 400

## File Diubah
- apps/quran-digital/src/components/AddToHomescreen/AddToHomescreen.tsx
- apps/quran-digital/src/components/AudioPlayer/AudioPlayer.tsx

## Bug/Fitur yang Ditangani
- Memperbaiki error 400 pada Next Image untuk gambar promosi A2HS.
- Meningkatkan kompatibilitas pemutar audio di iOS (Safari/Chrome iPhone) yang sering macet/lamat loading saat ganti qari/surah.
- Menambahkan tombol “Emergency Reset Audio” khusus iPhone jika loading terlalu lama.

## Alasan Teknis
- A2HS: Path `/quran-in-phone.png` tidak ada di `public/` aplikasi quran-digital sehingga optimizer Next mengembalikan 400. Diganti ke aset yang tersedia dan menandai `unoptimized` sesuai rule repo untuk static asset.
- iOS Audio: iOS menerapkan kebijakan user-gesture ketat dan sering “stuck” saat elemen `<audio>` berganti `src` berulang. Ditambahkan mekanisme `forceReloadAudio()` yang:
  - Menghentikan audio, mengosongkan `src`, `load()` ulang, lalu set `src` baru dan `play()` dengan penanganan error.
  - Dipanggil otomatis saat ganti qari di iOS bila sebelumnya sedang memutar, agar menjaga rantai gesture dan mencegah state audio “macet”.
  - Menampilkan tombol reset bila loading >5 detik di iOS untuk recovery cepat oleh user.

## Ringkasan Perubahan
- AddToHomescreen.tsx:
  - Mengganti `src` ke `/qalbyy-with-background.png`.
  - Menambahkan `unoptimized` pada komponen Image.
- AudioPlayer.tsx:
  - Menambahkan state `showResetButton` dan efek untuk menampilkan tombol emergency reset setelah 5 detik loading di iOS.
  - Menambahkan fungsi `forceReloadAudio(overrideUrl?)` untuk re-inisialisasi total elemen audio dan memulai pemutaran ulang secara aman.
  - Memperbarui `handleQariChange`:
    - Jika iOS dan sebelumnya sedang memutar, pakai `forceReloadAudio` dengan URL qari baru.
    - Platform lain tetap auto-play via `handlePlay()` seperti sebelumnya.
  - Menambahkan tombol UI “Audio macet? Tap untuk muat ulang (Khusus iPhone)” di area kontrol saat kondisi terpenuhi.

## Cara Verifikasi
1. A2HS Image
   - Jalankan dev server modul quran-digital.
   - Buka modal Add to Homescreen (mobile).
   - Periksa tab Network di DevTools: permintaan `_next/image?url=...` untuk ikon tidak mengembalikan 400.
2. iOS Audio
   - Buka di iPhone Safari/Chrome.
   - Putar audio surat, ganti qari saat audio sedang memutar.
   - Harapkan audio memulai ulang tanpa stuck; jika loading >5 detik, tombol reset muncul — tap tombol tersebut harus memulihkan pemutaran.
   - Pastikan `playsInline` dan strategi preload diterapkan (sudah ada via `getAudioLoadingStrategy`).

## Next Steps
- Observasi log di perangkat iOS nyata untuk memastikan tidak ada kasus edge yang lolos.
- Evaluasi stabilitas URL dari `getBestAudioUrl` (hindari redirect berulang).
- Pertimbangkan mekanisme backoff/retry moderat jika jaringan lambat.

## Catatan
- Perubahan mengikuti aturan repo: Image statis menggunakan `unoptimized`, ikon dari `lucide-react`, serta menjaga UX dengan loading/disable state yang jelas.

