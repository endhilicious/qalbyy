import type { Metadata } from "next";
import { SidebarProvider } from "#/contexts/SidebarContext";
import AddToHomescreen from "#/components/AddToHomescreen";
import "../../globals.css";

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <SidebarProvider>
          {children}
          <AddToHomescreen />
        </SidebarProvider>
      </body>
    </html>
  );
}
