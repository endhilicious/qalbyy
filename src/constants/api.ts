// API endpoints untuk equran.id
export const API_BASE_URL = 'https://equran.id/api/v2';

export const API_ENDPOINTS = {
  SURAT: `${API_BASE_URL}/surat`,
  SURAT_DETAIL: (id: number) => `${API_BASE_URL}/surat/${id}`,
  TAFSIR: (id: number) => `${API_BASE_URL}/tafsir/${id}`,
} as const;
