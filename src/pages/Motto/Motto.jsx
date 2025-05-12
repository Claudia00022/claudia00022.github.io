import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./motto.style.css";
import SmileMotto from "../../SmileMotto";

export default function Motto(props) {
  const motto_container = useRef(null);
  const text_container = useRef(null);

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

      tl.to(text_container.current, { y: 575 }, 0);
    });

    return () => context.revert();
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
      <div className="flex justify-start h-screen ms-5   ">
        <div ref={text_container} className=" w-5/12">
          <p
            ref={props.contact_section}
            className="title"
            style={{ textAlign: "left", fontSize: "7.5rem", fontWeight: 700 }}
          >
            Want to reach out?{" "}
          </p>
        </div>
      </div>
      <div className=" text absolute bottom-5 left-5">
        <p> © 2025</p>
      </div>
      <SmileMotto />
    </div>
  );
}
