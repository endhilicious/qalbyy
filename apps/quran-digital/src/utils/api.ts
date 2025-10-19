import { API_ENDPOINTS } from '#/constants/api';
import type { SuratResponse, AyatResponse } from '#/types/alquran';
import type { DoaResponse, DoaDetailResponse } from '#/types/doa';

// Fungsi untuk fetch daftar surat
export async function fetchSuratList(): Promise<SuratResponse> {
  try {
    const response = await fetch(API_ENDPOINTS.SURAT);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching surat list:', error);
    throw error;
  }
}

// Fungsi untuk fetch detail surat dengan ayat
export async function fetchSuratDetail(id: number): Promise<AyatResponse> {
  try {
    const response = await fetch(API_ENDPOINTS.SURAT_DETAIL(id));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching surat detail for id ${id}:`, error);
    throw error;
  }
}

// Fungsi untuk fetch daftar doa
export async function fetchDoaList(): Promise<DoaResponse> {
  try {
    const response = await fetch(API_ENDPOINTS.DOA);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching doa list:', error);
    throw error;
  }
}

// Fungsi untuk fetch detail doa
export async function fetchDoaDetail(id: number): Promise<DoaDetailResponse> {
  try {
    const response = await fetch(API_ENDPOINTS.DOA_DETAIL(id));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching doa detail for id ${id}:`, error);
    throw error;
  }
}

