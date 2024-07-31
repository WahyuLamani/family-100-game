import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cerdas Cermat Pramita",
  description: "Game sederhana 17 agustus PRAMITA by wahyu lamani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-200`}>
        <main className="flex min-h-screen flex-col items-center text-center">
          {children}
        </main>
      </body>
    </html>
  );
}
