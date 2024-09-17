"use client";

import Image from "next/image";
import { useRef } from "react";

type DataType = {
    name: string;
    client: string;
    description: string;
    src: string;
    year: number;
};

type DoubleType = {
    projects: Array<DataType>;
    reversed?: boolean;
};

const Double = ({ projects, reversed }: DoubleType) => {
    const firstImage = useRef<HTMLDivElement | null>(null);
    const secondImage = useRef<HTMLDivElement | null>(null);
    let requestAnimationFrameId: number | null = null;
    let xPercent: number = reversed ? 100 : 0;
    let currentXPercent: number = reversed ? 100 : 0;
    const speed: number = 0.15;

    const manageMouseMove = (e: MouseEvent): void => {
        const { clientX } = e;
        xPercent = (clientX / window.innerWidth) * 100;
        if (!requestAnimationFrameId) {
            requestAnimationFrameId = window.requestAnimationFrame(animate);
        }
    };

    const animate = (): void => {
        // Add easing to the animation
        const xPercentDelta: number = xPercent - currentXPercent;
        currentXPercent = currentXPercent + xPercentDelta * speed;

        // Change width of images between 33.33% and 66.66% based on cursor
        const firstImagePercent: number = 66.66 - currentXPercent * 0.33;
        const secondImagePercent: number = 33.33 + currentXPercent * 0.33;
        if (firstImage.current) {
            firstImage.current.style.width = `${firstImagePercent}%`;
        }
        if (secondImage.current) {
            secondImage.current.style.width = `${secondImagePercent}%`;
        }

        if (Math.round(xPercent) === Math.round(currentXPercent)) {
            if (requestAnimationFrameId) {
                window.cancelAnimationFrame(requestAnimationFrameId);
                requestAnimationFrameId = null;
            }
        } else {
            requestAnimationFrameId = window.requestAnimationFrame(animate);
        }
    };

    return (
        <div
            onMouseMove={(e) => {
                manageMouseMove(e);
            }}
            className="flex mt-[10vh] h-[45vw]"
        >
            {/* First Image Container */}
            <div
                ref={firstImage}
                className={`${reversed ? "w-1/3" : "w-2/3"} flex-shrink-0`}
            >
                <div className="pb-[66%] relative">
                    <Image
                        src={`/images/${projects[0].src}`}
                        fill={true}
                        alt={"image"}
                        className="object-cover"
                    />
                </div>
                <div className="text-base p-[10px]">
                    <h3 className="text-[1.2em] mb-[5px] mt-0 font-normal">
                        {projects[0].name}
                    </h3>
                    <p className="text-[1em] m-0 text-[rgb(187, 187, 187)]">
                        {projects[0].description}
                    </p>
                    <p className="text-[1em] m-0 text-[rgb(101, 101, 101)]">
                        {projects[0].year}
                    </p>
                </div>
            </div>

            {/* Second Image Container */}
            <div
                ref={secondImage}
                className={`${reversed ? "w-2/3" : "w-1/3"} flex-shrink-0`}
            >
                <div className="pb-[66%] relative">
                    <Image
                        src={`/images/${projects[1].src}`}
                        fill={true}
                        alt={"image"}
                        className="object-cover"
                    />
                </div>
                <div className="text-base p-[10px]">
                    <h3 className="text-[1.2em] mb-[5px] mt-0 font-normal">
                        {projects[1].name}
                    </h3>
                    <p className="text-[1em] m-0 text-[rgb(187, 187, 187)]">
                        {projects[1].description}
                    </p>
                    <p className="text-[1em] m-0 text-[rgb(101, 101, 101)]">
                        {projects[1].year}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Double;

// import Image from "next/image";
// import { useRef } from "react";

// const Double = ({ projects, reversed }) => {
//     const firstImage = useRef(null);
//     const secondImage = useRef(null);

//     return (
//         <div className="flex mt-[10vh] h-[45vw]">
//             <div ref={firstImage} className={styles.imageContainer}>
//                 <div className="pb-[66%] relative">
//                     <Image
//                         src={`/images/${projects[0].src}`}
//                         fill={true}
//                         alt={"image"}
//                         className="object-cover"
//                     />
//                 </div>

//                 <div className="text-base p-[10px]">
//                     <h3 className="text-[1.2em] mb-[5px] mt-0 font-normal">
//                         {projects[0].name}
//                     </h3>

//                     <p className="text-[1em] m-0 text-[rgb(187, 187, 187)]">
//                         {projects[0].description}
//                     </p>

//                     <p className="text-[1em] m-0 text-[rgb(101, 101, 101)]">
//                         {projects[0].year}
//                     </p>
//                 </div>
//             </div>

//             <div ref={secondImage} className={styles.imageContainer}>
//                 <div className="pb-[66%] relative">
//                     <Image
//                         src={`/images/${projects[1].src}`}
//                         fill={true}
//                         alt={"image"}
//                         className="object-cover"
//                     />
//                 </div>

//                 <div className="text-base p-[10px]">
//                     <h3 className="text-[1.2em] mb-[5px] mt-0 font-normal">
//                         {projects[1].name}
//                     </h3>

//                     <p className="text-[1em] m-0 text-[rgb(187, 187, 187)]">
//                         {projects[1].description}
//                     </p>
//                     <p className="text-[1em] m-0 text-[rgb(101, 101, 101)]">
//                         {projects[1].year}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Double;
