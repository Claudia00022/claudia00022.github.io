//Components
"use client";
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "framer-motion";
import SmoothScroll from "./components/smoothScroll";
import LoadingPage from "./components/loading/loading";
import SmileFace from "./pages/MainSection/SmileFace";
import NavBar from "./components/nav";
import MediaIcons from "./components/mediaIcons";
import About from "./pages/AboutSection";
import Skills from "./pages/SkillsSection/Skills";
import Work from "./pages/ProjectSection/Work";
import ContactSection from "./pages/ContactSection/ContactSection";
import "lenis/dist/lenis.css";
gsap.registerPlugin(ScrollTrigger);

function App(props) {
  const scene = useRef(null);
  const contact_section = useRef();
  const text_opacity = useRef([]);
  const about_section = useRef();
  const smile_container = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const homeSection = document.getElementById("home");

  if (homeSection) {
    homeSection.scrollIntoView({
      behavior: "instant",
    }); //Za kazdym razem kiedy strona jest odswizana wraca do homeSection
  }

  useEffect(() => {
    // Ustawienie timera na 3 sekundy
    const timer = setTimeout(() => {
      setIsExiting(true); // Rozpocznij animację wyjścia

      // Po zakończeniu animacji usuń loading
      setTimeout(() => {
        setIsLoading(false);
      }, 800); // 800ms na animację slide-down
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contact_section.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Apply animation to all elements in the `text_opacity` array
    text_opacity.current.forEach((ref, index) => {
      tl.to(
        ref,
        {
          opacity: 1,
        },
        0
      ); // Animate opacity for each element
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: about_section.current,
          start: "top bottom", // start animacji, gdy top sekcji dotknie bottom viewportu
          end: "center center", // koniec animacji w centrum
          scrub: true,
        },
      });

      tl.fromTo(
        smile_container.current,
        {
          y: 400,
        }, // wyjściowa pozycja: z dołu
        {
          y: -50,
          ease: "none",
        } // docelowa pozycja: na twarzy
      );
    });

    return () => ctx.revert(); // czyszczenie GSAP
  }, []);

  return (
    <>
      <SmoothScroll>
        {" "}
        {isLoading && (
          <div
            className={`fixed inset-0 z-[1000] transition-transform duration-1000 ease-in-out ${
              isExiting
                ? "transform translate-y-[-100%]"
                : "transform translate-y-0"
            }`}
          >
            <LoadingPage />
          </div>
        )}{" "}
        <div className="xs:block lg:hidden gradient-frame"> </div>
        <MediaIcons text_opacity={text_opacity} /> <NavBar />
        <div id="home">
          <SmileFace />
        </div>
        <div id="about">
          {" "}
          <About
            about_section={about_section}
            smile_container={smile_container}
          />{" "}
        </div>{" "}
        <Skills scrollYP={scrollYProgress} />{" "}
        <div id="work">
          <Work />
        </div>{" "}
        <div id="contact">
          <ContactSection contact_section={contact_section} />{" "}
        </div>
      </SmoothScroll>{" "}
    </>
  );
}

export default App;
