import type { Metadata, Viewport } from "next";

import { SITE_INFO } from "@/constants";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

// site metadata
export const metadata: Metadata = {
  title: SITE_INFO.name,
  description: SITE_INFO.description,
  authors: [
    {
      name: "Sanidhya Kumar Verma",
      url: "https://github.com/sanidhyy",
    },
  ],
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "travel",
    "travel-website",
    "tailwindcss",
    "ui/ux",
    "js",
    "javascript",
    "html",
    "css",
  ],
  manifest: "/manifest.json",
};

// site viewport
export const viewport: Viewport = {
  themeColor: "#30AF5B",
};

// layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* navbar */}
        <Navbar />
        {/* main */}
        <main className="relative overflow-hidden">{children}</main>
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
