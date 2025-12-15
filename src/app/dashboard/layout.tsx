import React from 'react'
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import { ActiveThemeProvider } from "@/components/Theme/ActiveTheme";
import { AppSidebar } from "@/components/Sidebar/AppSidebar"
import { SiteHeader } from "@/components/Sidebar/SiteHeader"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export const metadata: Metadata = {
    title: "Karang Taruna | Dashboard",
};

export default async function LayoutDashboard({ children }: Readonly<{ children: React.ReactNode }>) {
    const cookieStore = await cookies()
    const activeThemeValue = cookieStore.get("active_theme")?.value;
    const isScaled = activeThemeValue?.endsWith("-scaled");

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <ActiveThemeProvider>
                <div className={cn(activeThemeValue ? `theme-${activeThemeValue}` : "", isScaled ? "theme-scaled" : "")}>
                    <SidebarProvider style={{ "--sidebar-width": "calc(var(--spacing) * 72)", "--header-height": "calc(var(--spacing) * 12)" } as React.CSSProperties}>
                        <AppSidebar variant="inset" />
                        <SidebarInset>
                            <SiteHeader />
                            <div className="flex flex-1 flex-col">
                                <div className="@container/main flex flex-1 flex-col gap-2">
                                    {children}
                                </div>
                            </div>
                        </SidebarInset>
                    </SidebarProvider>
                </div>
            </ActiveThemeProvider>
        </ThemeProvider>
    )
}
