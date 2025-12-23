import React from 'react';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Navbar />
            {children}
            <Toaster />
        </>
    )
}
