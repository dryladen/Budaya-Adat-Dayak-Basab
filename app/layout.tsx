import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/app/provider";
import NavbarCompt from "@/app/components/NavbarCompt";
import FooterCompt from "@/app/components/FooterCompt";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

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
        <FooterCompt />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
