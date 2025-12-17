import { cookies } from "next/headers";
import type { Metadata } from "next";
import { metadata as pageMetadata } from "./metadata";
import { organizationSchema } from "@/lib/schema";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = pageMetadata;

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const pathname = cookieStore.get("pathname")?.value || ""
  const isDashboard = pathname.startsWith("/dashboard")

  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth bg-background text-foreground overscroll-none`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema]) }} />
        {!isDashboard && <Navbar />}
        {children}
        {!isDashboard && <Toaster />}
      </body>
    </html>
  );
}
