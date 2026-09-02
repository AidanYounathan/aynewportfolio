import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import ConsoleHeader from "./components/ConsoleHeader";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const manrope = localFont({
  src: [
    { path: '../public/fonts/Manrope/static/Manrope-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '../public/fonts/Manrope/static/Manrope-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/Manrope/static/Manrope-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Manrope/static/Manrope-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/Manrope/static/Manrope-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/Manrope/static/Manrope-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/Manrope/static/Manrope-ExtraBold.ttf', weight: '800', style: 'normal' },
    // variable font as fallback
    { path: '../public/fonts/Manrope/Manrope-VariableFont_wght.ttf', weight: '100 900', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: "Aidan Younathan — Software Engineer",
  description: "Software engineer building end-to-end systems with a focus on accessibility, reliability, and maintainable architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${jetbrainsMono.variable} ${manrope.variable} antialiased`}
      >
        <SmoothScroll />
        <ConsoleHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
