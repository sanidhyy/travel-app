import type { Metadata } from "next";

import { SITE_INFO } from "@/constants";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

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
  themeColor: "#30AF5B",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
