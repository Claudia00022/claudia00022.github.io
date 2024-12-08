import { useLayoutEffect, useRef } from "react";
import "./artPage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arts_data from "../../artsData";
import SmileTwo from "../../SmileArt";
import Pencil from "../../assets/pencils.png";
gsap.registerPlugin(ScrollTrigger);

const word = "MY PASSION";
const images = arts_data.slice(0, 3);

export default function ArtPage() {
  const container = useRef(null);
  const title = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const imagesRef = useRef([]);
  const sectionTwoRef = useRef(null);
  const pencilsRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(imagesRef.current[1], { y: 175 }, 0);
      tl.to(imagesRef.current[2], { y: -150 }, 0);
      tl.to(pencilsRef.current, { y: -150 }, 0);
      tl.to(title3.current, { top: 50 }, 0);
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div className="container_art w-full bg-black relative " >
        <div className="w-screen h-screen bg-red-400 sticky top-0"  style={{height: 'calc(100vh - 60px)', width:'calc(100vw - 60px)'}}></div>
        </div>
    </>
  );
}
