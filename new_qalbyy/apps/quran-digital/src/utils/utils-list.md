# Daftar Utils Functions

## API Utils
**Lokasi:** `src/utils/api.ts`

### fetchSuratList()
**Kegunaan:** Mengambil daftar semua surat Al-Quran dari API equran.id  
**Return Type:** `Promise<SuratResponse>`  
**Error Handling:** Throw error jika request gagal

**Contoh Penggunaan:**
```tsx
try {
  const response = await fetchSuratList();
  setSuratList(response.data);
} catch (error) {
  console.error('Error loading surat list:', error);
}
```

### fetchSuratDetail(id: number)
**Kegunaan:** Mengambil detail surat dan ayat-ayatnya dari API  
**Parameters:**
- `id: number` - Nomor surat (1-114)
**Return Type:** `Promise<AyatResponse>`  
**Error Handling:** Throw error jika request gagal

**Contoh Penggunaan:**
```tsx
try {
  const response = await fetchSuratDetail(1);
  setSuratData(response.data);
} catch (error) {
  console.error('Error loading surat detail:', error);
}
```

## Audio Utils
**Lokasi:** `src/utils/audioUtils.ts`

### detectAudioCapabilities()
**Kegunaan:** Mendeteksi kemampuan audio browser/device saat ini  
**Return Type:** `AudioCapabilities`  
**Deteksi:** Format audio yang didukung (MP3, AAC, OGG, WAV), iOS, Safari

**Contoh Penggunaan:**
```tsx
const capabilities = detectAudioCapabilities();
if (capabilities.isIOS) {
  // Handle iOS specific audio logic
}
```

### getBestAudioUrl(audioSources, qariId)
**Kegunaan:** Mendapatkan URL audio terbaik untuk device saat ini  
**Parameters:**
- `audioSources: Record<string, string>` - Mapping qari ID ke URL audio
- `qariId: string` - ID qari yang dipilih
**Return Type:** `string | null`  
**Optimasi:** Memilih format audio terbaik untuk iOS/Safari

**Contoh Penggunaan:**
```tsx
const audioUrl = getBestAudioUrl(audioSources, selectedQari);
if (audioUrl) {
  audio.src = audioUrl;
}
```

### initializeAudioContext()
**Kegunaan:** Inisialisasi audio context untuk iOS (memerlukan user gesture)  
**Return Type:** `Promise<boolean>`  
**iOS Fix:** Membuka blokir audio iOS dengan user interaction

**Contoh Penggunaan:**
```tsx
const unlocked = await initializeAudioContext();
if (unlocked) {
  // Audio ready to play on iOS
}
```

### getAudioLoadingStrategy(isIOS)
**Kegunaan:** Mendapatkan strategi loading audio yang optimal  
**Parameters:**
- `isIOS: boolean` - Apakah device adalah iOS
**Return Type:** Object dengan konfigurasi audio element  
**Optimasi:** Konfigurasi berbeda untuk iOS vs browser lain

**Contoh Penggunaan:**
```tsx
const strategy = getAudioLoadingStrategy(isIOS);
audio.preload = strategy.preload;
```