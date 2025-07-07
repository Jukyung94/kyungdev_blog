import type { Metadata, Viewport } from "next";
import "../globals.css";
import "../index.css";
import Menus from "@/components/nav-links";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Jukyung Dev",
  description: "Jukyung Dev Logs",
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
      </div>
      <div id="content">
        {children}
      </div>
        <Footer />
    </div>
  );
}
