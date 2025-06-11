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
      className=" h-full w-full relative overflow-hidden"
      style={{
        backgroundColor: "#F4F2ED",
        borderLeft: "5px solid #5F605F",
        borderRight: "5px solid #5F605F",
        borderBottom: "5px solid #5F605F",
      }}
    >
      <div className=" absolute top-0 ms-10 mt-5 z-10  ">
        <p
          className="text xs:text-base xl:text-2xl"
          style={{ color: "#3F3B37", opacity: 1 }}
        >
          05/
        </p>
      </div>
      <div className="flex justify-start min-h-screen ms-10 me-10 flex-wrap">
        <div ref={text_container} className=" sm:w-full md:w-5/12 xs:mt-16 xl:mt-0 mb-5">
          <p
            ref={props.contact_section}
            className="title xs:text-7xl lg:text-9xl text-black"
            style={{ textAlign: "left", fontWeight: 700 }}
          >
            Want to reach out?{" "}
          </p>
         <a href = 'klaudia.forysiak@gmail.com' className=" xs:block lg:hidden text text-lg font-bold block mt-5 underline decoration-wavy ">klaudiaforysiak@gmail.com</a>
        </div>
      </div>
      <div className=" text absolute bottom-0 left-5  ">
        <p> © 2025</p>
      </div>
      <SmileMotto />
      <MediaIconsSmallDev />
     
      
    </div>
  );
}
