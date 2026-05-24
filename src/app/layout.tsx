import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: {
    default: "Sale BD - Best Online Shopping in Bangladesh",
    template: "%s | Sale BD",
  },

  description:
    "Buy electronics, fashion, groceries and daily essentials at best price in Bangladesh.",

  keywords: [
    "ecommerce bangladesh",
    "online shopping bd",
    "sale bd",
    "buy products online",
  ],

  metadataBase: new URL("https://salebd.com"),

  openGraph: {
    title: "Sale BD - Online Shopping",
    description:
      "Best ecommerce platform in Bangladesh for daily shopping needs.",
    url: "https://salebd.com",
    siteName: "Sale BD",
    type: "website",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-gray-50 text-gray-900 antialiased">

        {/* =========================
            APP WRAPPER
        ========================= */}
        <div className="flex min-h-screen flex-col">

          {/* =========================
              HEADER
          ========================= */}
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
            <div className="mx-auto w-full max-w-screen-xl px-3 sm:px-5 lg:px-8">
              <Navbar />
            </div>
          </header>

          {/* =========================
              MAIN CONTENT
          ========================= */}
          <main className="flex-1">
            <div className="mx-auto w-full max-w-screen-xl px-3 py-5 sm:px-5 lg:px-8 lg:py-6">
              {children}
            </div>
          </main>
<Footer />
        </div>
      </body>
    </html>
  );
}