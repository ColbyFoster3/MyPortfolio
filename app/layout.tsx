import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from '../components/header';
import Footer from '../components/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colby Foster",
  description: "This is Colby Foster's portfolio.",
  openGraph: {
    title: "Colby Foster",
    description: "This is Colby Foster's portfolio.",
    type: "website",
    url: "https://www.colbyfoster.com/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="utf-8"></meta>
      </head>
      <body className="font-sans bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
