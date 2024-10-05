import { useLayoutEffect, useRef } from "react";
import "./art-test.style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arts_data from "../../artsData";
gsap.registerPlugin(ScrollTrigger);





const word = "my passion";
const images = arts_data.slice(0, 3);
console.log(images);

export default function ArtTest() {
  const container = useRef(null);
  const title = useRef(null);
  const characters = useRef([]);
  const title2 = useRef(null);
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });

      tl.to(title.current, { y: -100 }, 0);
      tl.to(title2.current, { y: -100 }, 0);
      tl.to(imagesRef.current[1], { y: -175 }, 0);
      tl.to(imagesRef.current[2], { y: -150 }, 0);

      characters.current.forEach((char) => {
        tl.to(char, { top: -200 }, 0);
      });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div ref={container} className=" container_art">
        <div className="body_art" >
          <h1 ref={title} className="title">Art</h1>
          <h1 ref={title2} className="title">Is</h1>
          <div>
            <p className="title">
              {word.split("").map((letter, i) => {
                return (
                  <span
                    className="span_word"
                    ref={(ref) => (characters.current[i] = ref)}
                    key={`l_&{i}`}
                  >
                    {letter}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="art_body">
          <div className="images">
            {images.map((image, i) => {
              return (
                <div
                  ref={(ref) => (imagesRef.current[i] = ref)}
                  className="imageContainer"
                >
                  <img
                    src={image.img_link}
                    alt="art images"
                    className="img_art"
                  ></img>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
