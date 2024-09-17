"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

const InfiniteTextMove = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    //! Gsap
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e) => (direction = e.direction * -1),
            },
            x: "-500px",
        });
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    };

    return (
        <main className="relative flex h-[100vh] mb-[100vh] overflow-hidden">
            <Image
                src="/images/image-2.jpg"
                fill={true}
                alt="background"
                className="object-cover"
            />

            {/* <div className="absolute top-[calc(100vh - 350px)] border"> */}
            <div className="absolute bottom-0">
                <div ref={slider} className="slider relative whitespace-nowrap">
                    <p
                        ref={firstText}
                        className="relative m-0 text-white text-[230px] font-medium pr-[50px]"
                    >
                        Freelance Developer -
                    </p>

                    <p
                        ref={secondText}
                        className="relative m-0 text-white text-[230px] font-medium pr-[50px]"
                    >
                        Freelance Developer -
                    </p>
                </div>
            </div>
        </main>
    );
};

export default InfiniteTextMove;
