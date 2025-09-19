import type { Metadata } from "next";
import { SidebarProvider } from "#/contexts/SidebarContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qalbyy - Aplikasi Islam",
  description: "Aplikasi lengkap untuk membantu ibadah dan kehidupan spiritual sehari-hari",
  manifest: "/manifest.json",
  themeColor: "#10b981",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Qalbyy",
  },
  formatDetection: {
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
