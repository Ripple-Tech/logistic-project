import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
//import NextThemeProvider from "@/providers/theme-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NYSCForum - National Youth Service Corps Forum",
  description: "Number one Forum for all Nigerian serving Coppers",
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
      <body className={`${inter.className} bg-gray-100 dark:bg-dark-1`}>
      
        <div className='w-full flex justify-center items-center min-h-screen  max-w-4xl'>
          {children}
        </div> 
      
      </body>
    </html>
    </SessionProvider> 
  );
}