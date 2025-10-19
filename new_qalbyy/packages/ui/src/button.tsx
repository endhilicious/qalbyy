"use client";
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Perubahan pada file ini WAJIB direkap di 'recapt-changes-button.md' (packages/ui/src). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Review ekstra hati-hati sebelum merge.

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
