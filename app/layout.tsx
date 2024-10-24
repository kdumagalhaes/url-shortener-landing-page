import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
