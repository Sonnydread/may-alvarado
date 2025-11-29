import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ScrollProgress } from "./landing/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lavishlyYours = localFont({
  src: "/fonts/lavishly-yours-latin-400-normal.ttf",
  variable: "--font-lavishly",
  display: "swap",
});

export const metadata: Metadata = {
  title: "May Alvarado",
  description: "Tejidos artesanales con amor",
  icons: {
    icon: "/xxl.svg",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lavishlyYours.variable}`}
    >
      <body className="antialiased bg-black text-white">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
