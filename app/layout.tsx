import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caverna de Valor",
  description: "Eventos corporativos e Notícias dos seus ativos em um só lugar",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body className={inter.className}>
          <Toaster/>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
