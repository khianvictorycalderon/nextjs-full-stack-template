import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---------- SITE CONSTANTS (EDIT ONLY THIS BLOCK) ----------
export const SITE = {
  name: "Sample title",
  description: "Sample description...",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-website.com",

  keywords: ["keyword 1", "keyword 2", "keyword 3"],

  ogImage: "/images/preview.png",
  ogWidth: 1200,
  ogHeight: 630,

  favicon: "/favicon.ico", // located in app/favicon.ico
  appleIcon: "/apple-touch-icon.png",
};
// ------------------------------------------------------------

// ---------- GLOBAL METADATA (DON'T TOUCH) ----------
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.description,
  keywords: SITE.keywords,

  alternates: {
    canonical: `${SITE.url}/`,
  },

  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}${SITE.ogImage}`,
        width: SITE.ogWidth,
        height: SITE.ogHeight,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [`${SITE.url}${SITE.ogImage}`],
  },

  icons: {
    icon: SITE.favicon,
    apple: SITE.appleIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
