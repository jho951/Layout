import type { Metadata } from "next";

import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}


export const metadata: Metadata = {
  title: "Layout Test Project",
  description: "Layout Test Project",
};
