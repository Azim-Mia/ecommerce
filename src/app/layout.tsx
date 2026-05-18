import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sale BD",
  description: "Best E-commerce platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950">

        <header className="sticky top-0 z-[1000] w-full">
          <Navbar />
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="text-center py-4 text-sm bg-gray-100 dark:bg-gray-900">
          © {new Date().getFullYear()} Sale BD
        </footer>

      </body>
    </html>
  );
}