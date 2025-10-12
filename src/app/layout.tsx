import type { Metadata } from "next";
import { Outfit, Noto_Sans } from "next/font/google";
import ToolBar from "@/app/ui_elements/toolbar"
import { Providers } from "./providers";
import "./globals.css";

const font_outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
});

const font_noto_sans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"]
});

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font_outfit.variable} ${font_noto_sans.variable} antialiased overscroll-none selection:bg-cpink-500/90`}>
          <ToolBar />
          {children}
      </body>
    </html>
  );
}
