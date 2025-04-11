
"use client";


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import Localfont from "next/font/local";

const CustomFont = Localfont({
  src: [{ path: './ariaria.woff2' }],
  display: 'swap',
  
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Exclude Header and Footer for the sign-in page
  const excludeHeaderFooter = pathname === "/signin";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${CustomFont.className} bg-white text-black`}
      >
        {!excludeHeaderFooter && <Header />}
        {children}
        {!excludeHeaderFooter && <Footer />}
      
      </body>
    </html>
  );
}
