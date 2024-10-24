import type { Metadata } from "next";
import { font_poppins } from "./fonts";
import "./globals.scss";
import { Navigation } from "./components/Navigation/Navigation";

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
      <body className={font_poppins.variable}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
