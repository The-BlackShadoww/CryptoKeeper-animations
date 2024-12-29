"use client";

import { useRef } from "react";
import Card from "./Card";
import { projects } from "./data";
import { useScroll } from "framer-motion";

const CardParallax = () => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
      target: container,

    //   offset: ["start start", "end end"],
      offset: ["start center", "end center"],
    });

    return (
        <main ref={container} className="mt-[50vh] mb-[50vh] bg-red-600/10">
            {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                    <Card
                        key={`p_${i}`}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </main>
    );
};

export default CardParallax;
