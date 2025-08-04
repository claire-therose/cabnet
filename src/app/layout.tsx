import type { Metadata } from "next";
import { Outfit, Noto_Sans } from "next/font/google";
import ToolBar from "@/app/ui_elements/toolbar"
import "./globals.css";

const font_outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
});

const font_noto_sans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Cabnet",
  description: "Cabnet web app",
};

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font_outfit.variable} ${font_noto_sans.variable} antialiased overscroll-none selection:bg-cpink-400/80`}
      >
        <ToolBar />
        {children}
      </body>
    </html>
  );
}
