import type { Metadata } from "next";
import { font_poppins } from "./fonts";
import "./globals.scss";

export const metadata: Metadata = {
  title: "URL Shortener",
  description: "URL shortening landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font_poppins.variable}>{children}</body>
    </html>
  );
}
