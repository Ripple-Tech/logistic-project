import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
//import NextThemeProvider from "@/providers/theme-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import TopBar from "@/components/admin/TopBar";
import LeftSidebar from "@/components/admin/LeftSideBar";
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
  
  return (
    <SessionProvider >
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 dark:bg-dark-1`}>
         <TopBar/>
        <main className='flex flex-row'>
        
            <LeftSidebar />
            
            <section className='main-container'>
         <div className='w-full max-w-4xl'> {children} </div>
          </section>
        
        </main>
      </body>
    </html>
    </SessionProvider> 
  );
}