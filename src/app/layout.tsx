import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/contexts/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emir Keleş - Frontend Developer & UI/UX Designer",
  description: "Modern web teknolojileri ile kullanıcı dostu ve etkileyici dijital deneyimler yaratan Frontend Developer. React, Next.js, TypeScript uzmanı.",
  keywords: "frontend developer, react, nextjs, typescript, javascript, web developer, ui/ux designer, portfolio",
  authors: [{ name: "Emir Keleş" }],
  creator: "Emir Keleş",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://emirkeles.dev",
    title: "Emir Keleş - Frontend Developer",
    description: "Modern web teknolojileri ile kullanıcı dostu ve etkileyici dijital deneyimler yaratan Frontend Developer.",
    siteName: "Emir Keleş Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emir Keleş - Frontend Developer",
    description: "Modern web teknolojileri ile kullanıcı dostu ve etkileyici dijital deneyimler yaratan Frontend Developer.",
    creator: "@emirkeles",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
