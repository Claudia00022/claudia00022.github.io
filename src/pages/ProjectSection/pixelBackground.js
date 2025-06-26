

import React, { useEffect, useRef, useState } from "react";
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
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  // Update rozmiaru okna
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateSize);
    updateSize(); // pierwszy pomiar
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // IntersectionObserver — wykrywa czy komponent jest widoczny
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionActive(entry.isIntersecting);
      },
      { threshold: 0.5 }
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

  // Fisher–Yates shuffle
  const shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = (indexOfColum) => {
    const blockSize = window.innerWidth * 0.05;
    const containerHeight = containerRef.current?.clientHeight || window.innerHeight;
    const amountOfBlocks = Math.ceil(containerHeight / blockSize);
    const delay = shuffle([...Array(amountOfBlocks)].map((_, i) => i));

    return delay.map((randomDelay, i) => (
      <motion.div
        key={i}
        className="h-[5vw] w-full bg-[#EB5939]"
        variants={anim}
        initial="initial"
        animate={sectionActive ? "open" : "closed"}
        custom={[indexOfColum + randomDelay, 20 - indexOfColum + randomDelay]}
      />
    ));
  };

  return (
    <div
      ref={containerRef}
      className="flex absolute inset-0 -z-20 overflow-hidden bg-[#0D0D0D]"
    >
      {[...Array(20)].map((_, i) => (
        <div key={i} className="w-[5vw] h-full">
          {getBlocks(i)}
        </div>
      ))}
    </div>
  );
}

