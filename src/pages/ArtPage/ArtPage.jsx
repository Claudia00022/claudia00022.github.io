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
      <div ref={container} className="container_art ">

        
          <div className="absolute left-52 top-52 z-50">
            <h1 ref={title} className="title text-center"   style={{ color:'black', fontSize: "9.5rem", opacity:0.7 }}>
              ART
            </h1>
            <h1 ref={title2} className="title text-center"   style={{ color:'black', fontSize: "9.5rem", opacity:0.7 }}>
              IS
            </h1>
          </div>

          <div>
            <p
              className="title absolute bottom-0 left-52 text-center  z-10"
              style={{ color:'#FFFF99', fontSize: "9.5rem" }}
              ref={title3}
            >
              {word}
            </p>
          </div>

          <div ref={sectionTwoRef} >
            <div className="images">
              {images.map((image, i) => {
                return (
                  <div
                    ref={(ref) => (imagesRef.current[i] = ref)}
                    className="imageContainer "
                    key={image.id}
                  >
                    <img
                      src={image.img_link}
                      alt="art images"
                      className="img_art"
                    ></img>
                  </div>
                );
              })}
              <div className=" art_text_container">
                <p className="text">
                  I am constantly inspired by the endless possibilities within
                  art, and I believe that every project is an opportunity to
                  push boundaries, challenge conventions, and expand my creative
                  horizons.
                </p>
              </div>
            </div>
          </div>
      
          <SmileTwo />
 
        
 
        
      </div>
    </>
  );
}
