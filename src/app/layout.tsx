// src/app/layout.tsx
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "فلك - خرائط فلكية دقيقة واستشارات متخصصة",
  description:
    "احسب خريطتك الفلكية مجاناً واحجز جلسة متخصصة مع خبير لتحليل جانب واحد من حياتك بعمق",
  keywords: ["فلك", "أبراج", "خريطة فلكية", "تنجيم", "استشارات فلكية"],
  authors: [{ name: "فلك" }],
  openGraph: {
    title: "فلك - خرائط فلكية دقيقة",
    description: "احسب خريطتك الفلكية مجاناً",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="min-h-screen bg-gradient-to-br from-cosmic-900 via-purple-900 to-cosmic-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
