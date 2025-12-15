import { cookies } from "next/headers";
import type { Metadata } from "next";
import { metadata as pageMetadata } from "./metadata";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import { ActiveThemeProvider } from "@/components/Theme/ActiveTheme";
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
  const activeThemeValue = cookieStore.get("active_theme")?.value;
  const pathname = cookieStore.get("pathname")?.value || ""
  const isScaled = activeThemeValue?.endsWith("-scaled");
  const isDashboard = pathname.startsWith("/dashboard")

  return (
    <html lang="id" suppressHydrationWarning>
      <body className={cn(`${geistSans.variable} ${geistMono.variable} antialiased bg-background dark:bg-white text-foreground overscroll-none`, activeThemeValue ? `theme-${activeThemeValue}` : "", isScaled ? "theme-scaled" : "")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ActiveThemeProvider>
            {!isDashboard && <Navbar />}
            {children}
            {!isDashboard && <Toaster />}
          </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
