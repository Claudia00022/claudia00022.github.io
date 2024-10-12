import { useLayoutEffect, useRef } from "react";
import "./art-test.style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arts_data from "../../artsData";
import Pencil from '../../assets/pencils.png'
gsap.registerPlugin(ScrollTrigger);





const word = "MY PASSION";
const images = arts_data.slice(0, 3);
console.log(images);

export default function ArtTest() {
  const container = useRef(null);
  const title = useRef(null);
  const characters = useRef([]);
  const title2 = useRef(null);
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

      characters.current.forEach((char) => {
        tl.to(char, { top: -800 }, 0);
      });
    });

    return () => context.revert();
  }, []);

  useLayoutEffect(() =>{
    
    const tl = gsap.timeline({scrollTrigger:{
      trigger: sectionTwoRef.current,
       pin: true,
       start:'top 5%',
        end: "+=1200",
        scrub: 1,
    }
  });
  return () => {
    tl.scrollTrigger?.kill(); 
    tl.kill(); 
  };
  }, [])


 

  return (
    <>

    
      <div ref={container} className=" container_art" >
      <div className=" w-full absolute -left-54 opacity-50"><img src={Pencil} alt="pencils" className="img_art"></img></div>
     
        <div>
        <div className="absolute center_items z-50">
          <h1 ref={title} className="title text-center">ART</h1>
          <h1 ref={title2} className="title text-center">IS</h1>
          <div>
            <p className="title text-center" style={{color: '#c9c9c9', fontSize: '9.5rem' }}>
              {word.split("").map((letter, i) => {
                return (
                  <span
                    className="span_word"
                    ref={(ref) => (characters.current[i] = ref)}
                    key={i}
                  >
                    {letter}
                  </span>
                );
              })}
            </p>
          </div>
          </div>
          <div ref={sectionTwoRef} >
          <div className="images ">
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
            <div className=" art_text">
          <p className="text">I am constantly inspired by the endless possibilities within art, and I believe that every project is an opportunity to push boundaries, challenge conventions, and expand my creative horizons.</p>
        </div>
          </div>
          </div>
        </div>
       
      </div>

    </>
  );
}
