import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./artPage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arts_data from "../../artsData";
import Section from "./ScrollStop";
import SmileTwo from "../../SmileArt";
import Pencil from "../../assets/pencils.png";
// import { useScroll } from "@react-three/drei";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import MyVide from "../../assets/artVideo.mp4";
gsap.registerPlugin(ScrollTrigger);

const word = "expre";
const word2 = "ssion";
// const images = arts_data.slice(0, 3);

export default function ArtPage() {
  const imageRef = useRef(null);
  const title = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const title4 = useRef(null);
  const imagesRef = useRef([]);
  const sectionTwoRef = useRef(null);
  const pencilsRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });

      // tl.to(imagesRef.current[1], { y: 175 }, 0);
      // tl.to(imagesRef.current[2], { y: -150 }, 0);
      // tl.to(pencilsRef.current, { y: -150 }, 0);
      tl.to(title3.current, { top: "0%" }, 0);
      tl.to(title3.current, { opacity: 0 }, 0);
      tl.to(title4.current, { top: "0%" }, 0);
      tl.to(title4.current, { opacity: 0 }, 0);
    });

    return () => context.revert();
  }, []);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0.70, 0.75, 0.80], [1,2.8, 4]);
  // const opacity = useTransform(scrollYProgress, [0.95, 1, 1.05], [1, 1, 0]);

  const scale = useSpring(scale4, {
    damping: 20, // Smoother animation
    stiffness: 100, // Slower responsiveness
    restDelta: 0.0001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.current > 0.5) {
        // Adjust scroll position threshold as needed
        setPlayVideo(true);
      } else {
        setPlayVideo(false);
      }
    };

    const unsubscribe = scrollYProgress.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <div ref={container} className="container_art w-full relative mt-20 " style={{backgroundColor:'#F4F2ED'}}>
        <div className=" w-3/6 right-5  absolute top-0 ms-5 bg-slate-50 z-10">
          <p
            className="title mb-3 "
            style={{ opacity: 0.5, fontWeight: "bold", fontSize: "60px" }}
          >
            04/
          </p>
          <p className="title" style={{ fontSize: "4rem" }}>
            Art is<br></br>my<br></br>{" "}
          </p>
        </div>
        <div ref={title3} className="absolute top-96 left-5 opacity-100">
          <p className="title" style={{ fontSize: "14rem" }}>
            {word}
          </p>
        </div>
        <div ref={title4} className="absolute top-96 right-5 ">
          <p className="title" style={{ fontSize: "14rem" }}>
            {word2}
          </p>
        </div>
        <div className="w-full h-screen sticky top-0  ">
          <div className="w-full h-screen absolute top-0 flex items-center justify-center overflow-hidden">
            {playVideo ? (
              <motion.div
                ref={imageRef}
                className="relative bg-slate-500 "
                style={{ width: "25vw", height: "25vh", scale: scale }}
              >
                <video
                  className=" object-cover w-full h-full "
                  src={MyVide}
                  autoPlay
                  loop
                  muted
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                ></video>
              </motion.div>
            ) : (
              <motion.div
                ref={imageRef}
                className="relative bg-slate-500"
                style={{ width: "25vw", height: "25vh", scale: scale }}
              >
                <img
                  className=" object-cover w-full h-full"
                  src={arts_data[1].img_link}
                  alt="obrazek"
                ></img>
              </motion.div>
            )}

            {/* </motion.div> */}
          </div>
        </div>
      </div>
      {/* <Section /> */}
    </>
  );
}
