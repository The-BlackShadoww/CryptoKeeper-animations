"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
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
  const { width, height } = useViewportSize();
  const [ref, bounds] = useMeasure();
  const [isProfileImgVisible, setIsProfileImgVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    // layoutEffect: false,
  });

  // console.log(width);
  // console.log(height);
  // console.log(bounds);

  //! Calculate the size of the image and its position
  const size = useTransform(scrollYProgress, [0, 0.15], [profileImgSize, 48]);
  const topPosition = useTransform(scrollYProgress, [0, 0.15], [6, 6]);
  // const leftPosition = useTransform(scrollYProgress, [0, 0.15], [175, 44]);
  const leftPosition = useTransform(
    scrollYProgress,
    [0, 0.15],
    [
      (width > 414 ? 414 : width) / 2 - profileImgSize / 2,
      width > 414 ? 44 : bounds.left,
    ]
  );

  const nameXPosition = useTransform(scrollYProgress, [0.1, 0.15], [-20, 0]);
  const nameOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[480px] h-[680px] overflow-hidden relative bg-white shadow-sm">
        <div className="w-full h-16 absolute top-0 left-0 z-10 bg-gray-300">
          <div className="flex items-center gap-2.5 h-full">
            <div
              ref={ref}
              className="absolute top-0 left-0 w-12 h-12 shrink-0 rounded-full bg-gray-400/50"
            ></div>
            <div>
              <motion.p
                style={{
                  x: nameXPosition,
                  opacity: nameOpacity,
                }}
                className="text-lg font-normal text-text-black"
              >
                Ashikur Rahman
              </motion.p>
            </div>
          </div>
          <motion.div
            layoutId="profileImg" //! layoutId is used for animation between pages
            className="absolute left-[calc(50%-58px)] top-1.5 rounded-full bg-gray-400"
            style={{
              width: size,
              height: size,
              left: leftPosition,
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
          <div className="w-full h-[1500px] flex justify-center items-center bg-orange-600/50">
            <button
              className="bg-cyan-500 p-4 rounded-md"
              onClick={() => setIsProfileImgVisible(true)}
            >
              View Profile
            </button>
          </div>
        </div>
        {isProfileImgVisible && (
          <div className="absolute top-0 left-0 size-full flex justify-center items-center bg-black/50">
            <button
              className="bg-lime-200 p-4 rounded-md"
              onClick={() => setIsProfileImgVisible(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageRepositionPage;
