import type { Metadata } from "next";
import { metadata as pageMetadata } from "./metadata";
import { GoogleTagManager } from '@next/third-parties/google';
import { organizationSchema } from "@/lib/metadata/schema";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = pageMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth bg-background text-foreground overscroll-none`}>
        <GoogleTagManager gtmId="	GTM-TD7BDCD7" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema]) }} />
        {children}
      </body>
    </html>
  );
}
