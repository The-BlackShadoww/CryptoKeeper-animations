/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [0, 0.7, 1],
  });

  const { scrollYProgress: adjustY } = useScroll({
    target: targetRef,
    offset: [0, 0.7, 1],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.3, 0.4],
    [0, 1, 1, 0]
  );
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  const translateY1 = useTransform(adjustY, [0, 0.2], [0, -30]);
  const translateY2 = useTransform(adjustY, [0.2, 0.3, 0.4], [30, 0, -30]);
  const translateY3 = useTransform(adjustY, [0.4, 0.6], [30, 0]);

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-white">Scroll down</h1>
      </div>
      <div ref={targetRef} className="relative bg-black text-white h-[400vh]">
        <div className="absolute w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen sticky top-0">
            <div className="bg-black h-[30vh] lg:h-auto"></div>
            <div className="bg-red-900 h-[90vh] lg:min-h-screen"></div>
          </div>
        </div>
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            className="absolute top-0 w-full"
            style={{ opacity: opacity1 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
              <div className="work-left flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto">
                <div className="leading-10">
                  <div>We Design and developed</div>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Lorem Ipsum
                  </div>
                </div>
              </div>
              <div className="work-right flex flex-1 lg:items-center justify-center h-screen">
                <motion.div
                  className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0"
                  style={{ translateY: translateY1 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1704146087769-ba4d31543936?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Picture"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-0 w-full"
            style={{ opacity: opacity2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
              <div className="work-left flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto">
                <div className="leading-10">
                  <div>We Design and developed</div>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Craftzblog
                  </div>
                </div>
              </div>
              <div className="work-right flex flex-1 lg:items-center justify-center h-screen">
                <motion.div
                  className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0"
                  style={{ translateY: translateY2 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1704121355552-10ac4d5b1677?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
                    alt="Picture"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-0 w-full"
            style={{ opacity: opacity3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
              <div className="work-left flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto">
                <div className="leading-10">
                  <div>We Design and developed</div>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Leetcode
                  </div>
                </div>
              </div>
              <div className="work-right flex flex-1 lg:items-center justify-center h-screen">
                <motion.div
                  className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0"
                  style={{ translateY: translateY3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1701937189060-8b87985d85e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Picture"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-white">Scroll Up</h1>
      </div>
    </>
  );
};

export default Project;
