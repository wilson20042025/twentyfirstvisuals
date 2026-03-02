import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Script from "next/script";
import ImageProtection from "@/components/ImageProtection";

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
  metadataBase: new URL('https://twentyfirstvisuals.com'),
  title: {
    default: "Twenty-First Visuals | Visual Artist & photography portfolio in Monrovia, Liberia",
    template: "%s | Twenty-First Visuals"
  },
  description: "Experience the premium photography portfolio of Twenty-First Visuals by Fritzgerald Wilson. Specializing in portrait studies, minimalist landscapes, and cinematic visual stories in Monrovia, Liberia.",
  keywords: ["photography", "portfolio", "portrait", "minimalism", "Liberia", "Monrovia", "visual artist", "Fritzgerald Wilson", "African photography"],
  authors: [{ name: "Fritzgerald Wilson" }],
  creator: "Fritzgerald Wilson",
  publisher: "Twenty-First Visuals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_LR',
    url: 'https://twentyfirstvisuals.com',
    siteName: 'Twenty-First Visuals',
    title: 'Twenty-First Visuals | Visual Artist & photography portfolio',
    description: 'A premium photography portfolio by Twenty-First Visuals, focusing on portrait studies, minimalist landscapes, and cinematic visual stories in Monrovia, Liberia.',
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
    title: 'Twenty-First Visuals | Visual Artist & photography portfolio',
    description: 'A premium photography portfolio by Twenty-First Visuals, focusing on portrait studies, minimalist landscapes, and cinematic visual stories in Monrovia, Liberia.',
    images: ['/thumbnail.jpg'],
    creator: '@twenty_first_visuals',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <link rel="canonical" href="https://twentyfirstvisuals.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        <ImageProtection />
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
              "telephone": "+231000000000",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Monrovia",
                "addressRegion": "Montserrado",
                "postalCode": "1000",
                "addressCountry": "LR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.3106,
                "longitude": -10.8047
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/twenty_first_visuals",
                "https://twitter.com/twenty_first_visuals"
              ],
              "founder": {
                "@type": "Person",
                "name": "Fritzgerald Wilson",
                "jobTitle": "Visual Artist & Photographer"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
