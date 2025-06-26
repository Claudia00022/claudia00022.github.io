import React, { useEffect, useRef, useState } from "react";
import "./style.project.css";
import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (delay) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.02 * delay[0] },
  }),
  closed: (delay) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.02 * delay[1] },
  }),
};

export default function PixelBackground() {
  const containerRef = useRef(null);
  const [sectionActive, setSectionActive] = useState(false);

  // Observer: aktywuje animację tylko gdy PixelBackground jest widoczny
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionActive(entry.isIntersecting);
      },
      { threshold: 0.5 } // możesz zmienić próg widoczności
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  /**
   * Shuffles array in place (Fisher–Yates shuffle).
   * @param {Array} a items An array containing the items.
   */
  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = (indexOfColum) => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const amountOfBlocks = Math.ceil(innerHeight / blockSize);
    const delay = shuffle([...Array(amountOfBlocks)].map((_, i) => i));

    return delay.map((randomDelay, i) => {
      return (
        <motion.div
          key={i}
          className="h-[5vw] w-[100%] bg-[#EB5939]"
          variants={anim}
          initial="initial"
          animate={sectionActive ? "open" : "closed"}
          custom={[indexOfColum + randomDelay, 20 - indexOfColum + randomDelay]}
        ></motion.div>
      );
    });
  };
  return (
    <div
      ref={containerRef}
      className="flex min-h-screen overflow-hidden bg-[#0D0D0D] absolute -z-10 "
    >
      {[...Array(20)].map((_, i) => {
        return (
          <div key={i} className="w-[5vw] min-h-[100%]">
            {getBlocks(i)}
          </div>
        );
      })}
    </div>
  );
}
