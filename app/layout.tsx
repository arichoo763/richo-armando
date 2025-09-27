import NavBar from "@/components/navbar";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Richo Armando Portfolio',
  description: '...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NavBar />
        <main>
          {children}

        </main>
        <NextTopLoader color="#A53DFF" />
      </body>
    </html>
  );
}
