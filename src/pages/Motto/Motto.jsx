import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import './motto.style.css'
import CloudsImg from '../../../src/assets/photos/3.png'
import CloudsImgMirror from '../../../src/assets/photos/mirror-3.png'


export default function Motto(){
    const motto_container = useRef(null);
     const text_container = useRef(null);
     const clauds_img = useRef({y:0});
     const clauds_img_mirror = useRef({y:0});
    
    useLayoutEffect(() => {
        const context = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: motto_container.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
    
          // tl.to(text_container.current, { y: -375 }, 0);
          tl.to(clauds_img_mirror.current, {y: -175}, 0);
          tl.to(clauds_img.current, {y: 375}, 0);
          
        });
    
        return () => context.revert();
      }, []);
    


    return(
        <div ref={motto_container} className=" h-full w-full relative" style={{backgroundColor: '#EEEFEE', border:'10px solid #ffff99'}}>
        <div ref={clauds_img} className=" absolute -bottom-10 -left-60">
        <img src={CloudsImg} alt= 'clouds' />
        </div>

        <div ref={clauds_img_mirror} className=" absolute -bottom-10 -right-60">
        <img src={CloudsImgMirror} alt= 'clouds' />
        </div>
        <div className="flex justify-center items-center h-screen">
        <div ref={text_container} className=" w-1/3">
            <p className="title" style={{textAlign:'center'}}>Let’s Reach for the Clouds (Together) </p>
            </div>
            </div>
           
        </div>
    )
}