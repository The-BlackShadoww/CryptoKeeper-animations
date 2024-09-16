"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Background from "../../public/images/image-1.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

const Intro: React.FC = () => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

    return (
        <div className="h-screen overflow-hidden">
            <motion.div style={{ y }} className="relative h-full">
                <Image
                    src={Background}
                    fill
                    alt="image"
                    style={{ objectFit: "cover" }}
                />
            </motion.div>
        </div>
    );
};

export default Intro;
