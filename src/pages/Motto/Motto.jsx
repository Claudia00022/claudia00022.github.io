import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./motto.style.css";
import SmileMotto from "../../SmileMotto";
import MediaIconsSmallDev from "../../components/mediaIconsSmallDev";

export default function Motto(props) {
  const motto_container = useRef(null);
  const text_container = useRef(null);

useLayoutEffect(() => {
  const context = gsap.context(() => {
    const mm = gsap.matchMedia();

    // ✅ Only animate on large screens (lg and above)
    mm.add("(min-width: 1181px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: motto_container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }).to(text_container.current, { y: 475 });
    });

    return () => mm.revert(); // Cleanup
  }, motto_container);

  return () => context.revert(); // Cleanup on unmount
}, []);


   



 

return (                     
    <div
      ref={motto_container}              
      className="min-h-screen w-full relative overflow-hidden bg-[#0D0D0D]"
      style={{borderBottom: '2px solid #373737'}}
     
    >
    
        <div ref={text_container} className=" w-full  xs:mt-16 xl:mt-0 mb-5 xl:ms-40 ">
            <p
          className="text-base xl:text-xl text-[#ffeeca] opacity-50 font-[700] ps-5"
        >
          05/
        </p>
          <p
            ref={props.contact_section}
            className="title  xs:text-6xl lg:text-8xl text-[#A89C89] p-5 "
           >
            Want to<br></br> reach out?{" "}
          </p>
        </div>
   

     
      <SmileMotto />
      <MediaIconsSmallDev />
     
      
    </div>
  );
}
