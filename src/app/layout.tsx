import "./globals.css";
import { StateProvider } from "@/redux/StateProvider";
import { Inter } from "next/font/google";
import Footer from "@/components/global/Footer";
import FloatingNavbar from "@/components/global/FloatingNavbar";
import ThemeSwitcher from "@/components/global/ThemeSwitcher";
import { ReactNode } from "react";
import ThemeStateProvider from "@/components/global/ThemeStateProvider";
import { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Om Londhe | Home",
  description: "Home page of Om Londhe's portfolio.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <StateProvider>
        <body className={`${inter.className} relative bg-white dark:bg-black`}>
          <ThemeStateProvider>
            <ThemeSwitcher />
            <FloatingNavbar />
            {children}
            <Footer />
          </ThemeStateProvider>
        </body>
      </StateProvider>
    </html>
  );
}
