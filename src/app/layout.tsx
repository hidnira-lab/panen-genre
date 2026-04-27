import localFont from 'next/font/local';
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "./globals.css";

const anekTelugu = localFont ({
  src: [
    { path: '../fonts/AnekTelugu-Thin.ttf', weight: '100', style: 'normal' },
    { path: '../fonts/AnekTelugu-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '../fonts/AnekTelugu-Light.ttf', weight: '300', style: 'normal' },
    { path: '../fonts/AnekTelugu-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/AnekTelugu-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/AnekTelugu-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../fonts/AnekTelugu-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../fonts/AnekTelugu-ExtraBold.ttf', weight: '800', style: 'normal' },
  ],
})

const abaloneSmile = localFont ({
  src: '../fonts/Abalone.ttf',
  variable: '--font-abalone',
})

export const metadata: Metadata = {
  title: "Panen GenRe",
  description: "oleh Ahmad Azisman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${anekTelugu.className} ${abaloneSmile.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
