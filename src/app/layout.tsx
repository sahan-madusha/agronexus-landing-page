import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Greenhouse - AI & IoT Innovation",
  description: "AI-Powered Smart Greenhouse for Efficient Farming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
