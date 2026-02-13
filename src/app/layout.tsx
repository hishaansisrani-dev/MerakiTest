import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Meraki Industries LLC | Premium Flexible Packaging Solutions",
    template: "%s | Meraki Industries",
  },
  description:
    "Meraki Industries LLC — the premier destination for customized flexible packaging solutions for pharmaceutical, food & beverage, and cosmetics industries. ISO 9001, ISO 22000 & ISO 15378 certified.",
  keywords: [
    "flexible packaging",
    "pharmaceutical packaging",
    "food packaging",
    "cosmetics packaging",
    "packaging manufacturer",
    "custom packaging solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Meraki Industries",
    title: "Meraki Industries LLC | Premium Flexible Packaging Solutions",
    description:
      "Premium flexible packaging solutions for pharmaceutical, food & beverage, and cosmetics industries. Based in UAE.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meraki Industries LLC | Premium Flexible Packaging Solutions",
    description:
      "Premium flexible packaging solutions for pharmaceutical, food & beverage, and cosmetics industries. Based in UAE.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
