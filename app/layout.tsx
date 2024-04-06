import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";

const specialElite = Special_Elite({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "André Luis de Oliveira 🧙‍♂️",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={specialElite.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
