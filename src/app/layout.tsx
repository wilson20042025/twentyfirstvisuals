import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Twenty-First Visuals | Visual Artist & Photography Portfolio",
    template: "%s | Twenty-First Visuals"
  },
  description: "A premium photography portfolio by Twenty-First Visuals, focusing on portrait studies, minimalist landscapes, and cinematic visual stories in Monrovia, Liberia.",
  keywords: ["photography", "portfolio", "portrait", "minimalism", "Liberia", "Monrovia", "visual artist", "Fritzgerald Wilson"],
  openGraph: {
    type: 'website',
    locale: 'en_LR',
    url: 'https://twentyfirstvisuals.com',
    siteName: 'Twenty-First Visuals',
    images: [
      {
        url: '/thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Twenty-First Visuals Portfolio Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/thumbnail.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PhotographyBusiness",
              "name": "Twenty-First Visuals",
              "image": "https://twentyfirstvisuals.com/thumbnail.jpg",
              "@id": "https://twentyfirstvisuals.com",
              "url": "https://twentyfirstvisuals.com",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Monrovia",
                "addressCountry": "LR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.3106,
                "longitude": -10.8047
              },
              "sameAs": [
                "https://www.instagram.com/twenty_first_visuals"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
