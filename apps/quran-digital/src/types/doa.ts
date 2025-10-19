// Types untuk API doa equran.id
export interface DoaResponse {
  status: string;
  total: number;
  data: Doa[];
}

export interface DoaDetailResponse {
  status: string;
  data: Doa;
}

export interface Doa {
  id: number;
  grup: string;
  nama: string;
  ar: string;
  tr: string;
  idn: string;
  tentang: string;
  tag: string[];
}
