 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Home from "@/components/shared/Home";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bilito",
  description: "Your one stop destination for booking filght ticket.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
   
       <Navbar />
        <Home />
        {children}
        <Footer />
    
        </body>
    </html>
  );
}
