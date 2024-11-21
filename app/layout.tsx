import type { Metadata } from "next";
import localFont from "next/font/local";
import "./bootstrap.min.css";
import "./all.min.css";
import "./page.module.css";
import "./globals.css";
import "./main.css";
import "./elsheik.css";
import NavBar from "./components/navbar";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const cairoFont = localFont({
  src: "./fonts/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--font-cairo",
  weight: "200 900",
  style: "normal",    
});

export const metadata: Metadata = {
  title: "El_She5",
  description: "شركة تعمل فى مجالات الكهرباء",
  keywords: "كهرباء, بناء, دهانات, خدمات معمارية, جبس, تشييد",

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      {/* <Script src="/all.min.js"/> */}
      <Script src="/bootstrap.bundle.min.js"/>
      <body className={`${geistSans.variable} ${geistMono.variable}${cairoFont.variable} `}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
