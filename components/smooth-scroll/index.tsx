"use client";

import { useEffect } from "react";
import Description from "./Description";
import Projects from "./Projects";
import Intro from "./Intro";

const SmoothScroll = () => {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <main className="">
            <Intro />
            <Description />
            <Projects />
        </main>
    );
};

export default SmoothScroll;
