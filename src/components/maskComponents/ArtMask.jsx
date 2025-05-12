import { useLayoutEffect, useRef } from "react";
import "../../pages/ArtPage/artPage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arts_data_mask from "../../artsDataMask";
gsap.registerPlugin(ScrollTrigger);

const word = "MY PASSION";
const images = arts_data_mask.slice(0, 3);

export default function ArtMask(props) {
  const container = useRef(null);
  const title3 = useRef(null);
  const imagesRef = useRef([]);
  const sectionTwoRef = useRef(null);

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

      tl.to(imagesRef.current[1], { y: -175 }, 0);
      tl.to(imagesRef.current[2], { y: -150 }, 0);
      tl.to(title3.current, { top: -50 }, 0);
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div
        ref={container}
        className="container_art"
        style={{ backgroundColor: "#EBCA98" }}
      >
        <div>
          <div
            onMouseEnter={props.handleHover}
            onMouseLeave={props.handleHoverBack}
          >
            <p
              className="title text-center absolute bottom-0 left-52 z-50"
              style={{ color: "#0A0A0A", fontSize: "9.5rem" }}
              ref={title3}
            >
              {word}
            </p>
          </div>
          <div ref={sectionTwoRef}>
            <div className="images ">
              {images.map((image, i) => {
                return (
                  <div
                    ref={(ref) => (imagesRef.current[i] = ref)}
                    className="imageContainer "
                    key={image.id}
                    onMouseEnter={props.handleHover}
                    onMouseLeave={props.handleHoverBack}
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
                <p
                  className="text"
                  style={{ color: "black" }}
                  onMouseEnter={props.handleHover}
                  onMouseLeave={props.handleHoverBack}
                >
                  I am constantly inspired by the endless possibilities within
                  art, and I believe that every project is an opportunity to
                  push boundaries, challenge conventions, and expand my creative
                  horizons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
