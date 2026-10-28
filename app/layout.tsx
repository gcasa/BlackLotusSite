import type { Metadata } from "next";
import { assetPath } from "./asset-path";
import { DM_Mono, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Playfair_Display({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"] });
const mono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gcasa.github.io"),
  title: "Black Lotus Incorporated — Technology with soul",
  description: "An independent software studio and technology consultancy designing distinctive digital products, native software, and modern computing tools.",
  icons: { icon: assetPath("/black-lotus-logo.png"), shortcut: assetPath("/black-lotus-logo.png"), apple: assetPath("/black-lotus-logo.png") },
  openGraph: {
    title: "Black Lotus Incorporated",
    description: "Digital products, thoughtfully built.",
    type: "website",
    images: [{ url: assetPath("/og.png"), width: 1200, height: 630, alt: "Black Lotus Incorporated — Digital products, thoughtfully built." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Lotus Incorporated",
    description: "Digital products, thoughtfully built.",
    images: [assetPath("/og.png")],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
