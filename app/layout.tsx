import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "星云漩涡 · Nebula Vortex",
  description: "从混沌中诞生秩序，在漩涡中凝聚力量。探索无限可能的数字宇宙。",
  keywords: ["星云漩涡", "数字创新", "技术哲学", "未来科技", "系统设计"],
  authors: [{ name: "星云漩涡团队" }],
  openGraph: {
    title: "星云漩涡 · Nebula Vortex",
    description: "从混沌中诞生秩序，在漩涡中凝聚力量。探索无限可能的数字宇宙。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className="min-h-full flex flex-col nebula-bg bg-fixed">
        <Navbar />
        <main className="flex-1 pt-20"> {/* pt-20 to account for navbar height */}
          {children}
        </main>
        <Footer />
        {/* Background particles will be added here */}
      </body>
    </html>
  );
}
