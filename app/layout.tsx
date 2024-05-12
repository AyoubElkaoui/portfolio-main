import React, { Suspense } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";


const inter = Inter({ subsets: ["latin"] });
const LazyStarBackground = React.lazy(() => import('@/components/main/StarBackground'));

export const metadata: Metadata = {
  title: "Ayoub ElKaoui",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
            <link rel="shortcut icon" href="/favicon.ico" />
        </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
      {/* Suspense with a fallback for lazy-loaded component */}
          <Suspense fallback={<div>Loading...</div>}>
              {/* Render the lazy-loaded StarBackground component */}
              <LazyStarBackground />
          </Suspense>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
