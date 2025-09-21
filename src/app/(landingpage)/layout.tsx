import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Navbar } from "#/components/LandingPage";
import { APP_CONFIG } from "#/config/app";
import "../globals.css";

export const metadata: Metadata = {
  title: "Qalbyy Travel - Paket Haji & Umroh Terpercaya",
  description: "Travel agent terpercaya untuk paket haji dan umroh. 22+ tahun pengalaman melayani 35,000+ jamaah dengan harga transparan dan jadwal pasti. Pembiayaan syariah tersedia.",
  keywords: "paket haji, paket umroh, travel haji, travel umroh, haji furoda, umroh plus, pembiayaan syariah, travel agent, perjalanan ibadah, haji 2025, umroh 2025, jadwal haji, jadwal umroh, harga haji, harga umroh, umroh nobar timnas, umroh private custom",
  openGraph: {
    title: "Qalbyy Travel - Paket Haji & Umroh Terpercaya",
    description: "Travel agent terpercaya untuk paket haji dan umroh. 22+ tahun pengalaman melayani 35,000+ jamaah dengan harga transparan dan jadwal pasti.",
    url: "https://qalbyy.com",
    siteName: "Qalbyy Travel",
    images: [
      {
        url: "/umroh-mock-pic/gambar-1.jpg",
        width: 1200,
        height: 630,
        alt: "Qalbyy Travel - Paket Haji & Umroh",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qalbyy Travel - Paket Haji & Umroh Terpercaya",
    description: "Travel agent terpercaya untuk paket haji dan umroh. 22+ tahun pengalaman melayani 35,000+ jamaah.",
    images: ["/umroh-mock-pic/gambar-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://qalbyy.com",
  },
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // If landing page is disabled, redirect to apps
  if (!APP_CONFIG.ENABLE_LANDING_PAGE) {
    redirect('/apps');
  }

  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://qalbyy.com" />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Qalbyy Travel",
              "description": "Travel agent terpercaya untuk paket haji dan umroh dengan 22+ tahun pengalaman",
              "image": "https://qalbyy.com/umroh-mock-pic/gambar-1.jpg",
              "@id": "https://qalbyy.com",
              "url": "https://qalbyy.com",
              "telephone": "+6281113567777",
              "email": "info@qalbyy.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rukan Bisnis Park Kirana Cawang, Jl. DI Pandjaitan Kav. 48 Blok A5",
                "addressLocality": "Jakarta Timur",
                "addressRegion": "DKI Jakarta",
                "addressCountry": "ID"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "17:00"
              },
              "priceRange": "$$",
              "serviceArea": {
                "@type": "Country",
                "name": "Indonesia"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Paket Haji & Umroh",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Paket Umroh Plus Nobar Timnas",
                      "description": "Program unik gabungkan ibadah dengan nobar Timnas Indonesia"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Paket Haji Furoda 2025",
                      "description": "Program 21 hari tanpa apartment transit"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
