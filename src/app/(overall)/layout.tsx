import type { Metadata } from "next";
import "../globals.css";
import "../index.css";
import Menus from "@/components/nav-links";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ServiceWorker from "@/components/sw";

export const metadata: Metadata = {
  title: "Jukyung Dev",
  description: "Jukyung Dev Logs",
  robots: "all",
  verification: {
    google: "H9uJkRos8F8CHKTnu7x1Gn6X4Suq42I96plA-oiuoxg"
  }
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
      <ServiceWorker />
    </div>
  );
}
