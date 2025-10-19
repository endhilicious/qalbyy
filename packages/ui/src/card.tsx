// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Perubahan pada file ini WAJIB direkap di 'recapt-changes-card-primitive.md' (packages/ui/src). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Review ekstra hati-hati sebelum merge.
import { type JSX } from "react";

export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
