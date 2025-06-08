import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./motto.style.css";
import SmileMotto from "../../SmileMotto";

export default function Motto(props) {
  const motto_container = useRef(null);
  const text_container = useRef(null);

useLayoutEffect(() => {
  const context = gsap.context(() => {
    const mm = gsap.matchMedia();

    // ✅ Only animate on large screens (lg and above)
    mm.add("(min-width: 1024px)", () => {
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
        borderRight: "3px solid #5F605F",
        borderBottom: "3px solid #5F605F",
      }}
    >
      <div className=" w-3/6  absolute top-0 ms-5 mt-16  z-10 ">
        <p
          className="text mb-3 "
          style={{ color: "#3F3B37", fontSize: "26px", opacity: 1 }}
        >
          05/
        </p>
      </div>
      <div className="flex justify-start min-h-screen ms-5 me-5 flex-wrap">
        <div ref={text_container} className=" sm:w-full md:w-5/12  bg-red-300">
          <p
            ref={props.contact_section}
            className="title"
            style={{ textAlign: "left", fontSize: "7.5rem", fontWeight: 700 }}
          >
            Want to reach out?{" "}
          </p>
        </div>
      </div>
      <div className=" text absolute bottom-10 left-5  ">
        <p> © 2025</p>
      </div>
      <SmileMotto />
    </div>
  );
}
