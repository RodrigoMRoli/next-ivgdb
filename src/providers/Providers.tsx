"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

// This structure for providers in useEffect is to prevent hydration problems in react prerendered expectations
export default function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>; // Render children without ThemeProvider during SSR
    }

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    ); // Wrap children with providers after mount
}
