import type { Metadata } from "next";
import { DM_Mono, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Playfair_Display({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"] });
const mono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "Black Lotus Incorporated — Technology with soul",
  description: "An independent software studio and technology consultancy designing distinctive digital products, native software, and modern computing tools.",
  icons: { icon: "/black-lotus-logo.png", shortcut: "/black-lotus-logo.png", apple: "/black-lotus-logo.png" },
  openGraph: {
    title: "Black Lotus Incorporated",
    description: "Digital products, thoughtfully built.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Black Lotus Incorporated — Digital products, thoughtfully built." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Lotus Incorporated",
    description: "Digital products, thoughtfully built.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
