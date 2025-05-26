import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Chai aur Code",
  description: "Learn coding with Chai aur Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={geist.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
      </body>
    </html>
  );
}
