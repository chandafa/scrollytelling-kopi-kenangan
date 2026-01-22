import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kopi Kenangan - Scrollytelling Experience",
  description: "A journey through the art of coffee. Crafted by Candra Kirana.",
  authors: [{ name: "Candra Kirana", url: "https://github.com/chandafa" }],
  creator: "Candra Kirana",
  keywords: ["coffee", "scrollytelling", "kopi kenangan", "web design", "nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-[#1a1512] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
