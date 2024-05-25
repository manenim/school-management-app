import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className={inter.className}>
        <main className="flex">
          <div className="min-h-screen w-[18%] fixed">
            <Sidebar />
          </div>
          <div className="ml-[18%] w-[82%]">
            <header className="h-[9vh] bg-white fixed w-[82%]">
              <Header />
            </header>
            <div className="mt-[9vh]">{children}</div>
          </div>
        </main>
      </section>
    </>
  );
}
