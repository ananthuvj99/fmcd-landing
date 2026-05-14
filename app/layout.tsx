import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FixMyCarDude | Auto Shop Management Software for Independent Shops",
  description:
    "Cloud-based auto repair shop software with digital estimates, scheduling, DVI, and customer messaging. Built for owner-operated shops. Start your free 21-day trial.",
  openGraph: {
    title: "FixMyCarDude | Auto Shop Management Software for Independent Shops",
    description:
      "Cloud-based auto repair shop software with digital estimates, scheduling, DVI, and customer messaging. Built for owner-operated shops.",
    url: "https://fixmycardude.com",
    siteName: "FixMyCarDude",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "FixMyCarDude",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "description":
        "Cloud-based auto repair shop software with digital estimates, scheduling, DVI, and customer messaging. Built for owner-operated independent shops.",
      "url": "https://fixmycardude.com",
      "offers": {
        "@type": "Offer",
        "price": "297",
        "priceCurrency": "USD",
        "description": "Billed annually",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I replace Mitchell1 with FixMyCarDude?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. FixMyCarDude is built as a modern, cloud-based alternative to Mitchell1. You get digital estimates, scheduling, technician job boards, invoicing, and customer messaging - without the complexity or legacy infrastructure. Most shops complete the switch in under an hour.",
          },
        },
        {
          "@type": "Question",
          "name": "Is FixMyCarDude built for independent shops?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FixMyCarDude is designed specifically for owner-operated, independent auto repair shops with 1-5 bays.",
          },
        },
        {
          "@type": "Question",
          "name": "Is there a free trial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes - 21 days, full platform access, no credit card required. You get everything from day one: scheduling, digital estimates, DVI, customer messaging, invoicing, and profitability reporting.",
          },
        },
        {
          "@type": "Question",
          "name": "What makes FixMyCarDude different from Shopmonkey or Tekmetric?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FixMyCarDude is purpose-built for small, independent shops - not enterprise chains. We include a free customer-facing mobile app, real-time two-way communication, and a simpler interface. Flat pricing, every feature included.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
