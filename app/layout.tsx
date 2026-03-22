import type { Metadata } from "next";
import { Merriweather, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "700", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
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
      <body className={`${roboto.variable} ${merriweather.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
