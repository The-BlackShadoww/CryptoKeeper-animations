"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import MainNav from "@/components/MainNav";

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time: number): void => {
            lenis.raf(time);

            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
    }, []);
    return (
        <>
            {/* <main className="max-w-[1280px] mx-auto px-4 relative"> */}
            <main className="px-4 relative">
                {/* <MainNav /> */}
                {children}
            </main>
        </>
    );
};

export default MainLayout;
