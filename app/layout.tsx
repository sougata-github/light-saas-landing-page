import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Light Saas",
  description: "Light themed saas landing page built using Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "antialiased scrollbar-hidden")}
      >
        {children}
      </body>
    </html>
  );
}
