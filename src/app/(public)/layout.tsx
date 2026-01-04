import React from 'react';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/Providers/ThemeProvider';

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ThemeProvider
            attribute="class"
            forcedTheme="light"
            enableSystem
            disableTransitionOnChange>
            <Navbar />
            {children}
            <Toaster />
        </ThemeProvider>
    )
}
