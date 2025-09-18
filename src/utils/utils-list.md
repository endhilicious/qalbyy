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
