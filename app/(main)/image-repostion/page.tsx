"use client";

import Image from "next/image";
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useViewportSize } from "@mantine/hooks";
import useMeasure from "react-use-measure";

const profileImgSize = 116;

const ImageRepositionPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    // layoutEffect: false,
  });

  const { width, height } = useViewportSize();
  const [ref, bounds] = useMeasure();
  // const [ref, { width: containerWidth, height: containerHeight }] = useMeasure;

  //! Calculate the size of the image and its position
  const size = useTransform(scrollYProgress, [0, 0.15], [profileImgSize, 48]);
  const topPosition = useTransform(scrollYProgress, [0, 0.15], [6, 6]);
  const lefPosition = useTransform(scrollYProgress, [0, 0.15], [175, 44]);

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[480px] h-[680px] overflow-hidden relative bg-white shadow-sm">
        <div className="w-full h-16 absolute  top-0 left-0 z-10  bg-gray-300">
          <div
            ref={ref}
            className="w-12 h-12 rounded-full bg-gray-400/50"
          ></div>
          <motion.div
            className="absolute left-[calc(50%-58px)] top-1.5 rounded-full bg-gray-400"
            style={{
              width: size,
              height: size,
              left: lefPosition,
              top: topPosition,
            }}
          >
            <Image
              src={"/images/person.jpg"}
              alt="user"
              width={6720}
              height={4480}
              className="w-full h-full rounded-full object-cover object-center"
            />
          </motion.div>
        </div>
        {/* div - 2 */}
        <div
          ref={containerRef}
          className="w-full h-full absolute top-0 left-0 p-6 overflow-y-auto bg-blue-100"
        >
          <div className="w-full h-[1500px] bg-orange-600/50"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageRepositionPage;
