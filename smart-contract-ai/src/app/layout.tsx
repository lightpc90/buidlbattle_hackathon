import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Smart Contract Platform",
  description: "AI-powered smart contract analysis and generation platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
          <div className="relative flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
              <Header />
              <main className="container mx-auto p-6">
                <div className="rounded-xl border border-slate-800/40 bg-slate-900/60 backdrop-blur-xl">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
} 