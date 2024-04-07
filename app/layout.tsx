import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Canvas from "@/components/canvas/Canvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative pb-16 min-h-screen flex flex-col main">
          <Navbar />
          {/* <Canvas /> */}
        {children}
        <Footer />
        </div>
        </body>
    </html>
  );
}
