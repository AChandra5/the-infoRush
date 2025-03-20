"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import i18n from "../../public/Locales/i18n";
import { I18nextProvider } from "react-i18next";


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

  useEffect(()=> {
    i18n.changeLanguage("en"); // Set default language
  }, [])


  return (
    <I18nextProvider i18n={i18n}>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
    </I18nextProvider>
  );
}
