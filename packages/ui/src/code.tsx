// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Perubahan pada file ini WAJIB direkap di 'recapt-changes-code-primitive.md' (packages/ui/src). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Review ekstra hati-hati sebelum merge.
import { type JSX } from "react";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <code className={className}>{children}</code>;
}
