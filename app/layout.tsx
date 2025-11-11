import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "ShopTagger — Simple Shopify tagging automation",
  description:
    "ShopTagger automatically tags Shopify orders and customers with simple rule-based automation. No Flow setup, no coding—just pick a rule and tag.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} relative min-h-screen bg-[#03121a] font-sans text-slate-100`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-500/12 via-[#03121a] to-slate-950" />
          <div className="bg-grid absolute inset-0 opacity-20" />
        </div>
        {children}
      </body>
    </html>
  );
}
