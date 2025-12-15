import React from 'react'
import type { Metadata } from "next";
import { AppSidebar } from "@/components/Sidebar/AppSidebar"
import { SiteHeader } from "@/components/Sidebar/SiteHeader"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export const metadata: Metadata = {
    title: "Karang Taruna | Dashboard",
};

export default function LayoutDashboard({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
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
    )
}
