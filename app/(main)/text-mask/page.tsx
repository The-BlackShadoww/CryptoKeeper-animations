"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phrases: string[] = [
    "It is a long established fact",
    "that a reader will be distracted",
    "by the readable content of a page",
    "when looking at its layout.",
];

export default function Home(): JSX.Element {
    return (
        <div className="_container text-white">
            <MaskText />
            <MaskText />
            <MaskText />
            <MaskText />
            <MaskText />
        </div>
    );
}

export function MaskText(): JSX.Element { 
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" }); // 75% was the problem.

    const animation = {
        initial: { y: "100%" },
        enter: (i: number) => ({
            y: "0",
            transition: {
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.075 * i,
            },
        }),
    };

    return (
        <div className="body" ref={ref}>
            {phrases.map((phrase: string, index: number) => (
                <div key={index} className="lineMask">
                    <motion.p
                        custom={index}
                        variants={animation}
                        initial="initial"
                        animate={isInView ? "enter" : ""}
                    >
                        {phrase}
                    </motion.p>
                </div>
            ))}
        </div>
    );
}

//! with IntersectionObserver
// "use client";

// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const phrases: string[] = [
//     "It is a long established fact",
//     "that a reader will be distracted",
//     "by the readable content of a page",
//     "when looking at its layout.",
// ];

// export default function Home(): JSX.Element {
//     return (
//         <div className="_container text-white">
//             <MaskText />
//             <MaskText />
//             <MaskText />
//             <MaskText />
//             <MaskText />
//         </div>
//     );
// }

// export function MaskText(): JSX.Element {
//     const ref = useRef<HTMLDivElement | null>(null);
//     const [isInView, setIsInView] = useState(false);

//     useEffect(() => {
//         const { current } = ref;
//         if (current) {
//             const observer = new IntersectionObserver(
//                 ([entry]) => {
//                     if (entry.isIntersecting) {
//                         setIsInView(true);
//                     }
//                 },
//                 { threshold: 0.5 }
//             );

//             observer.observe(current);

//             return () => {
//                 observer.unobserve(current);
//             };
//         }
//     }, []);

//     const animation = {
//         initial: { y: "100%" },
//         enter: {
//             y: "0",
//             transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
//         },
//     };

//     return (
//         <div className="body" ref={ref}>
//             {phrases.map((phrase: string, index: number) => (
//                 <div key={index} className="lineMask">
//                     <motion.p
//                         custom={index}
//                         variants={animation}
//                         initial="initial"
//                         animate={isInView ? "enter" : ""}
//                     >
//                         {phrase}
//                     </motion.p>
//                 </div>
//             ))}
//         </div>
//     );
// }
