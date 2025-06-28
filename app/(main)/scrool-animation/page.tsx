"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Specialization",
    content: "We specialize in cutting-edge technology solutions.",
  },
  {
    title: "Services",
    content: "Our services include web development, AI solutions, and more.",
  },
  {
    title: "Innovation",
    content: "We innovate to create meaningful digital experiences.",
  },
  {
    title: "Expertise",
    content: "Our team consists of world-class engineers and designers.",
  },
];

export default function WhoWeAre() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0.3, color: "rgb(255, 150, 150)" }, // Start with faded red
        {
          opacity: 1,
          color: "rgb(255, 0, 0)", // Fully visible red
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            end: "top 30%",
            scrub: true,
            onUpdate: (self) => {
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              const distanceToCenter = Math.abs(rect.top - windowHeight / 2);
              const opacity = Math.max(
                0.3,
                1 - distanceToCenter / (windowHeight / 2)
              );

              // Adjust the red intensity based on opacity
              const redIntensity = Math.floor(255 * opacity);
              const textColor = `rgb(${redIntensity}, 0, 0)`;

              gsap.to(el, { opacity, color: textColor });
            },
          },
        }
      );
    });
  }, []);

  return (
      <>
          <div className="h-[100vh] w-full"></div>

          <div className="relative flex w-full h-screen bg-gray-100 p-8">
              {/* Left Fixed Title */}
              <div className="w-1/3 sticky top-1/4 h-fit">
                  <motion.h2
                      initial={{
                          opacity: 0,
                          y: -20,
                          color: "rgb(255, 150, 150)",
                      }}
                      animate={{ opacity: 1, y: 0, color: "rgb(255, 0, 0)" }}
                      transition={{ duration: 1 }}
                      className="text-4xl font-bold"
                  >
                      Who we are & What we do
                  </motion.h2>
              </div>

              {/* Right Scrolling Content */}
              <div
                  ref={containerRef}
                  className="w-2/3 space-y-24 overflow-hidden"
              >
                  {sections.map((section, i) => (
                      <motion.div
                          key={i}
                          // ref={(el) => (sectionsRef.current[i] = el)}
                          ref={(el) => { sectionsRef.current[i] = el; }}
                          className="opacity-30 transition-opacity duration-500 text-red-500"
                      >
                          <h3 className="text-3xl font-semibold">
                              {section.title}
                          </h3>
                          <p className="text-lg">{section.content}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
          <div className="h-[100vh] w-full"></div>
      </>
  );
}

