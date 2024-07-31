import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Family 100 Pramita",
  description: "Game sederhana family 100 by wahyu lamani",
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
