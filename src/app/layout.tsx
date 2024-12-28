import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "antd/dist/reset.css"; // Import Ant Design's reset styles
import "./globals.css";
import AppHeader from "@/components/Header";
import Footer from "@/components/Footer";

// Load the Karla font
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"], // Specify subsets
  weight: ["400", "700"], // Include font weights you need
});

export const metadata: Metadata = {
  title: "HR Solutions",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.variable} antialiased`}>
        <AppHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
