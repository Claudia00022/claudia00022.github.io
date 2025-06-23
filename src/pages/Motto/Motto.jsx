import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./motto.style.css";
import SmileMotto from "../../SmileMotto";
import MediaIconsSmallDev from "../../components/mediaIconsSmallDev";
import { motion } from "framer-motion";

export default function Motto(props) {
  const motto_container = useRef(null);
  const text_container = useRef(null);
  const links = ["LinkedIn", "Instagram", "Behance", "Dribble"];

const underlineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%" },
};

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ✅ Only animate on large screens (lg and above)
      mm.add("(min-width: 1181px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: motto_container.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          })
          .to(text_container.current, { y: 475 });
      });

      return () => mm.revert(); // Cleanup
    }, motto_container);

    return () => context.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={motto_container}
      className="min-h-screen w-full relative overflow-hidden bg-[#0D0D0D]"
      style={{ borderBottom: "2px solid #373737" }}
    >
      <div
        ref={text_container}
        className=" w-full  xs:mt-16 xl:mt-0 mb-5 xl:ms-40  "
      >
        <p className="text-base xl:text-xl text-[#ffeeca] opacity-50 font-[700] ps-5">
          05/
        </p>
        <p
          ref={props.contact_section}
          className="title  xs:text-6xl lg:text-8xl text-[#A89C89] p-5 "
        >
          Want to<br></br> reach out?{" "}
        </p>
      </div>
     
  <div className="flex flex-col absolute bottom-10 left-0 z-10 w-full text-[#A89C89] cursor-pointer">
      <div className="w-full h-[5vh] flex items-center justify-around ps-48 pe-48 text-lg font-bold">
        {links.map((text, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: {},
              hover: {},
            }}
          >
            <span>{text}</span>
            <motion.span
              variants={{
                rest: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3 }}
              className="h-[2px] bg-[#A89C89] absolute bottom-[-2px] left-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
     

      <SmileMotto />
      <MediaIconsSmallDev />
    </div>
  );
}
