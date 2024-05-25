"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Vehicle Management System",
  description: "A system for managing vehicles and their transfers.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description}></meta>
        </head>
        <body className={inter.className}>
          <Navbar />
          <main className="p-4">{children}</main>
        </body>
      </html>
    </Provider>
  );
}
