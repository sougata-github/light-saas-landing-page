import "./globals.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
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
      <body className={twMerge(dm_sans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
