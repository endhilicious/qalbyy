import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "#/components/Layout/LayoutWrapper";
import { SidebarProvider } from "#/contexts/SidebarContext";

export const metadata: Metadata = {
  title: "Qalbyy",
  description: "Aplikasi Islam terpercaya untuk Al-Quran, Doa, dan perjalanan ibadah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <SidebarProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </SidebarProvider>
      </body>
    </html>
  );
}