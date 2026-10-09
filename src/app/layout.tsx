import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/dist/client/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andreas Thune | Portfolio",
  description: "Selected work by Andreas Thune, student developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script src="https://kit.fontawesome.com/235f170a74.js" crossOrigin="anonymous"></Script>
        <Header />
        <main className="flex-1 bg-[#f7f7f2] text-slate-950">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
