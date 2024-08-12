import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import NavbarCompt from "./components/Navbar";
import Footer from "./components/Footer";
import { ScrollShadow } from "@nextui-org/react";

const roboto = Roboto_Flex({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dayak Basab",
  description: "Mari mengenal budaya Dayak Basab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${roboto.className} scroll-smooth`}>
      <body>
        <main className="relative overflow-hidden bg-white">
          <NavbarCompt />
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
