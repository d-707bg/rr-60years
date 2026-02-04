import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ГПЧЕ „Ромен Ролан“ – 60 години",
  description:
    "Шест десетилетия ГПЧЕ „Ромен Ролан“ – празнична седмица и покана към съмишленици, бивши и настоящи ученици.",
  openGraph: {
    title: "ГПЧЕ „Ромен Ролан“ – 60 години",
    description:
      "Празнична страница за 60-годишнината на ГПЧЕ „Ромен Ролан“ в Стара Загора.",
    type: "website",
    locale: "bg_BG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
