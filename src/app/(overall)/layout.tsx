import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "../index.css";
import Menus from "@/components/nav-links";
import Footer from "@/components/footer";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jukyung Dev",
  description: "Logs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="page gap col">
          <div>
            <Header />
            <Menus />
            <hr />
          </div>
          {children}
          <Footer />
        </div>
  );
}
