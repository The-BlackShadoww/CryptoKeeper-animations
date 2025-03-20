"use client";

import React from "react";
import { motion } from "framer-motion";

const BlurTextRevealPage = () => {
    const headline = "Create beautiful text animations with React";
    const words = headline.split(" ");
    // const letters = headline.split("");

    return (
        <div className="flex items-center justify-center h-screen">
            <>
                {words.map((word, i) => (
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
                        animate={{ opacity: 1, filter: "blur(0)", y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="text-white inline-block mr-1.5"
                        key={i}
                    >
                        {word}
                    </motion.p>
                ))}
            </>
        </div>
    );
};

export default BlurTextRevealPage;
