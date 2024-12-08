import { useLayoutEffect, useRef } from "react";
import "./artPage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arts_data from "../../artsData";
import SmileTwo from "../../SmileArt";
import Pencil from "../../assets/pencils.png";
// import { useScroll } from "@react-three/drei";
import { useTransform, motion, useScroll } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const word = "lo";
const word2 = 've'
// const images = arts_data.slice(0, 3);

export default function ArtPage() {
  const imageRef = useRef(null)
  const title = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const title4 = useRef(null);
  const imagesRef = useRef([]);
  const sectionTwoRef = useRef(null);
  const pencilsRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(imagesRef.current[1], { y: 175 }, 0);
      tl.to(imagesRef.current[2], { y: -150 }, 0);
      tl.to(pencilsRef.current, { y: -150 }, 0);
      tl.to(title3.current, {  top: '50%'}, 0);
      // tl.to(title3.current, {  opacity: 0}, -0.5);
      tl.to(title4.current, {  top: '50%'}, 0);
      // tl.to(title4.current, {  opacity: 0}, -0.5);
    });

    return () => context.revert();
  }, []);

  const container = useRef(null);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end ']
  });

  const scale4 = useTransform(scrollYProgress, [0,1], [1,3])

  return (
    <>
      <div ref = {container} className="container_art w-full relative  " >
      <div className=" w-3/6 right-5  absolute top-0 ms-5 mt-16 bg-slate-50">
          <p className="title mb-3 " style={{opacity:0.5, fontWeight:'bold', fontSize: '60px'}}>04/</p>
          <p className="title"  style={{fontSize: '4rem'}}>Art is<br></br>my<br></br> </p>
        </div>
        <div ref={title3} className="absolute bottom-0 left-5 opacity-100">
          <p className="title" style={{fontSize: '20rem'}}>{word}</p>
        </div>
        <div ref={title4} className="absolute bottom-0 right-5 ">
          <p className="title" style={{fontSize: '20rem'}}>{word2}</p>
        </div>
        <div className="w-full h-screen sticky top-0">
          <div className="w-full h-screen absolute top-0 flex items-center justify-center">
            <motion.div ref={imageRef} className="relative mt-24" style={{width: '25%', height: '25vw', scale: scale4}}>
              <img className=" object-cover" src={arts_data[1].img_link} alt="obrazek"></img>
            </motion.div>
          </div>
        </div>
        </div>
    </>
  );
}
