import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Gilroy } from "@/components/fonts/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HoomanLabs",
  description: "A one stop product for your customizable customer service voice bots, analysis of each and every voice call for improved customer service, integrations with multiple products, shopify, google, googleSheet, googleCalendar, cal.com, google-meets, freshworks, freshdesk, zendesk, shiprocket and any other crm tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className ${Gilroy.variable}`}>{children}</body>
    </html>
  );
}
