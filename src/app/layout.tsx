import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Mousa | Wedding Photographer — Capturing Love Stories",
  description: "Mousa is a luxury wedding photographer capturing timeless moments with cinematic depth and artistic vision. Available globally for weddings, engagements, and intimate ceremonies.",
  keywords: "wedding photographer, luxury wedding photography, mousa, bridal photography, engagement photography, wedding portraits, destination wedding photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
