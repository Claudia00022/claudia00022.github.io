import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SmileMotto from "./SmileMotto";
import { motion } from "framer-motion";
import FooterSmallDev from "./FooterSmallDev";
import { links } from "../../links_data";

export default function ContactSection(props) {
  const motto_container = useRef(null);
  const text_container = useRef(null);
 

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
        className=" w-full xs:pt-10 xl:pt-0 xs:ms-5 xl:ms-40 absolute"
      >
        <p className="text-base xl:text-xl text-[#EB5939] opacity-50 font-[700]">
          05/
        </p>
        <p
          ref={props.contact_section}
          className="title xs:text-6xl lg:text-8xl text-[#A89C89] pt-3 "
        >
          Want to<br></br> reach<br></br> out?{" "}
        </p>
      </div>
      {/* Footer Large Device */}
      <div className="absolute bottom-10 left-0 z-10 w-full text-[#A89C89] cursor-pointer  xs:hidden lg:block">
        <div className="w-ful flex items-center justify-around ps-48 pe-48 text-lg font-bold">
          {links.map((link, index) => (
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
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
              <motion.span
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
                className="h-[1px] bg-[#EB5939] absolute bottom-[-2px] left-0"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <SmileMotto />
      <FooterSmallDev />
    </div>
  );
}
