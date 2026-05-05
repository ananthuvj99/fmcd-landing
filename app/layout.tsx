import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FixMyCarDude — Modern Software for Auto Shops & Customers",
  description:
    "A complete auto repair platform — a powerful web app for shop owners and technicians, and a mobile app for customers to find, book, and track repairs. Everything in real time.",
  openGraph: {
    title: "FixMyCarDude — Modern Software for Auto Shops & Customers",
    description:
      "Smarter shops. Happier customers. One platform.",
    url: "https://fixmycardude.com",
    siteName: "FixMyCarDude",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
