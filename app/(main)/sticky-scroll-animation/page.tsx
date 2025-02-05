"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AdvancedScrollAnimation = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const projectAnimations = [
        {
            title: "Lorem Ipsum",
            image: "https://images.unsplash.com/photo-1704146087769-ba4d31543936?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
            opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
            scale: useTransform(scrollYProgress, [0, 0.3], [1, 0.8]),
            translateY: useTransform(scrollYProgress, [0, 0.3], [0, 100]),
        },
        {
            title: "Craftzblog",
            image: "https://images.unsplash.com/photo-1704121355552-10ac4d5b1677?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
            opacity: useTransform(
                scrollYProgress,
                [0.3, 0.4, 0.5, 0.6],
                [0, 1, 1, 0]
            ),
            scale: useTransform(
                scrollYProgress,
                [0.3, 0.4, 0.5, 0.6],
                [0.8, 1, 1, 0.8]
            ),
            translateY: useTransform(
                scrollYProgress,
                [0.3, 0.4, 0.5, 0.6],
                [-100, 0, 0, 100]
            ),
        },
        {
            title: "Leetcode",
            image: "https://images.unsplash.com/photo-1701937189060-8b87985d85e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
            opacity: useTransform(scrollYProgress, [0.6, 1], [0, 1]),
            scale: useTransform(scrollYProgress, [0.6, 1], [0.8, 1]),
            translateY: useTransform(scrollYProgress, [0.6, 1], [100, 0]),
        },
    ];

    return (
        <div
            ref={containerRef}
            className="bg-black text-white h-[300vh] relative"
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                {projectAnimations.map((project, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0 flex"
                        style={{
                            opacity: project.opacity,
                            scale: project.scale,
                            translateY: project.translateY,
                        }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                            <div className="flex flex-col justify-center p-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.3,
                                    }}
                                >
                                    <div className="text-2xl opacity-70 mb-4">
                                        We Design and Develop
                                    </div>
                                    <div className="text-6xl font-bold tracking-tight">
                                        {project.title}
                                    </div>
                                </motion.div>
                            </div>
                            <div className="flex items-center justify-center overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={`Project ${project.title}`}
                                    className="object-cover w-full max-w-xl shadow-2xl"
                                    style={{
                                        scale: project.scale,
                                        opacity: project.opacity,
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AdvancedScrollAnimation;

//! chatgpt
// /* eslint-disable @next/next/no-img-element */
// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Project = () => {
//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//         offset: ["start start", "end end"],
//     });

//     // Staggered Opacity Transitions to ensure one div at a time
//     const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
//     const opacity2 = useTransform(scrollYProgress, [0.35, 0.6, 0.7], [0, 1, 0]);
//     const opacity3 = useTransform(scrollYProgress, [0.65, 0.9, 1], [0, 1, 1]);

//     // Scaling for a more dynamic effect
//     const scale1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1.1, 1]);
//     const scale2 = useTransform(scrollYProgress, [0.35, 0.6, 0.7], [1, 1.1, 1]);
//     const scale3 = useTransform(scrollYProgress, [0.65, 0.9, 1], [1, 1.1, 1]);

//     // Parallax Foreground Movement (More subtle for realism)
//     const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

//     return (
//         <>
//             <div className="h-screen w-full flex items-center justify-center">
//                 <h1 className="text-white text-3xl">Scroll down</h1>
//             </div>

//             <div
//                 ref={targetRef}
//                 className="relative bg-black text-white h-[300vh]"
//             >
//                 <div className="sticky top-0 h-screen overflow-hidden">
//                     {/* First Section */}
//                     <motion.div
//                         className="absolute top-0 w-full"
//                         style={{ opacity: opacity1, scale: scale1, zIndex: 3 }}
//                     >
//                         <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
//                             <div className="flex flex-col items-center justify-center text-4xl font-bold">
//                                 <div>We Designed</div>
//                                 <div className="text-6xl tracking-tight">
//                                     Lorem Ipsum
//                                 </div>
//                             </div>
//                             <motion.div
//                                 className="flex items-center justify-center"
//                                 style={{ y: foregroundY }}
//                             >
//                                 <img
//                                     src="https://images.unsplash.com/photo-1704146087769-ba4d31543936?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt="Project 1"
//                                     className="rounded-lg shadow-lg"
//                                 />
//                             </motion.div>
//                         </div>
//                     </motion.div>

//                     {/* Second Section */}
//                     <motion.div
//                         className="absolute top-0 w-full"
//                         style={{ opacity: opacity2, scale: scale2, zIndex: 2 }}
//                     >
//                         <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
//                             <div className="flex flex-col items-center justify-center text-4xl font-bold">
//                                 <div>We Created</div>
//                                 <div className="text-6xl tracking-tight">
//                                     Craftzblog
//                                 </div>
//                             </div>
//                             <motion.div
//                                 className="flex items-center justify-center"
//                                 style={{ y: foregroundY }}
//                             >
//                                 <img
//                                     src="https://images.unsplash.com/photo-1704121355552-10ac4d5b1677?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
//                                     alt="Project 2"
//                                     className="rounded-lg shadow-lg"
//                                 />
//                             </motion.div>
//                         </div>
//                     </motion.div>

//                     {/* Third Section */}
//                     <motion.div
//                         className="absolute top-0 w-full"
//                         style={{ opacity: opacity3, scale: scale3, zIndex: 1 }}
//                     >
//                         <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
//                             <div className="flex flex-col items-center justify-center text-4xl font-bold">
//                                 <div>We Developed</div>
//                                 <div className="text-6xl tracking-tight">
//                                     Leetcode
//                                 </div>
//                             </div>
//                             <motion.div
//                                 className="flex items-center justify-center"
//                                 style={{ y: foregroundY }}
//                             >
//                                 <img
//                                     src="https://unsplash.com/photos/a-group-of-people-walking-across-a-desert-6OiyBpoQUjY?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt="Project 3"
//                                     className="rounded-lg shadow-lg"
//                                 />
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>

//             <div className="h-screen w-full flex items-center justify-center">
//                 <h1 className="text-white text-3xl">Scroll Up</h1>
//             </div>
//         </>
//     );
// };

// export default Project;

//! original
// /* eslint-disable @next/next/no-img-element */
// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Project = () => {
//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//         offset: [0, 0.7, 1],
//     });

//     const { scrollYProgress: adjustY } = useScroll({
//         target: targetRef,
//         offset: [0, 0.7, 1],
//     });

//     const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//     const opacity2 = useTransform(
//         scrollYProgress,
//         [0.2, 0.25, 0.3, 0.4],
//         [0, 1, 1, 0]
//     );
//     const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

//     const translateY1 = useTransform(adjustY, [0, 0.2], [0, -30]);
//     const translateY2 = useTransform(adjustY, [0.2, 0.3, 0.4], [30, 0, -30]);
//     const translateY3 = useTransform(adjustY, [0.4, 0.6], [30, 0]);

//     return (
//         <>
//             <div className="h-screen w-full flex items-center justify-center">
//                 <h1 className="text-white">Scroll down</h1>
//             </div>
//             <div
//                 ref={targetRef}
//                 className="relative bg-black text-white h-[400vh]"
//             >
//                 <div className="absolute w-full h-full">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen sticky top-0">
//                         <div className="bg-black h-[30vh] lg:h-auto"></div>
//                         <div className="bg-red-900 h-[90vh] lg:min-h-screen"></div>
//                     </div>
//                 </div>
//                 <div className="sticky top-0 h-screen overflow-hidden">
//                     <motion.div
//                         className="absolute top-0 w-full"
//                         style={{ opacity: opacity1 }}
//                     >
//                         <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
//                             <div className="work-left flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto">
//                                 <div className="leading-10">
//                                     <div>We Design and developed</div>
//                                     <div className="text-4xl md:text-5xl font-semibold tracking-tight">
//                                         Lorem Ipsum
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="work-right flex flex-1 lg:items-center justify-center h-screen">
//                                 <motion.div
//                                     className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0"
//                                     style={{ translateY: translateY1 }}
//                                 >
//                                     <img
//                                         src="https://images.unsplash.com/photo-1704146087769-ba4d31543936?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
//                                         alt="Picture"
//                                     />
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         className="absolute top-0 w-full"
//                         style={{ opacity: opacity2 }}
//                     >
//                         <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
//                             <div className="work-left flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto">
//                                 <div className="leading-10">
//                                     <div>We Design and developed</div>
//                                     <div className="text-4xl md:text-5xl font-semibold tracking-tight">
//                                         Craftzblog
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="work-right flex flex-1 lg:items-center justify-center h-screen">
//                                 <motion.div
//                                     className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0"
//                                     style={{ translateY: translateY2 }}
//                                 >
//                                     <img
//                                         src="https://images.unsplash.com/photo-1704121355552-10ac4d5b1677?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
//                                         alt="Picture"
//                                     />
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         className="absolute top-0 w-full"
//                         style={{ opacity: opacity3 }}
//                     >
//                         <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
//                             <div className="work-left flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto">
//                                 <div className="leading-10">
//                                     <div>We Design and developed</div>
//                                     <div className="text-4xl md:text-5xl font-semibold tracking-tight">
//                                         Leetcode
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="work-right flex flex-1 lg:items-center justify-center h-screen">
//                                 <motion.div
//                                     className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0"
//                                     style={{ translateY: translateY3 }}
//                                 >
//                                     <img
//                                         src="https://images.unsplash.com/photo-1701937189060-8b87985d85e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
//                                         alt="Picture"
//                                     />
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//             <div className="h-screen w-full flex items-center justify-center">
//                 <h1 className="text-white">Scroll Up</h1>
//             </div>
//         </>
//     );
// };

// export default Project;
