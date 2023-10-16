import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
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
