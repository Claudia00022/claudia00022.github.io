import AnimatedText from "../../components/AnimatedText";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ja from "../../assets/photos/me.jpg";
import Smile from "./Smile";
import { SmilePlus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function About(props) {
  return (
    <>
      <div
        ref={props.about_section}
        className="relative min-h-screen -z-10 overflow-y-auto bg-[#0D0D0D] pb-10 lg:pt-10 "
        style={{
          borderBottom: "1px solid #373737",
        }}
      >
        <div className="w-full  xl:ps-40 xl:pe-40">
          <div className="flex flex-col-reverse lg:flex-row-reverse justify-around">
            <div className="w-full lg:w-5/6 p-5">
              <div className="flex flex-col-reverse lg:flex-row justify-around lg:justify-end lg:items-end mt-10 pt-5 lg:mt-0 gap-4   ">
                {/* TEKST */}
                <div className="w-full lg:w-5/12  overflow-y-auto max-h-[60vh] text text-[#A89C89]   ">
                  <p className="text font-bold">
                    ****I am <span className="text-[#19b9e6]">FREELANCE </span>{" "}
                    frontend developer with a passion for creating dynamic and
                    responsive web applications using the React framework.
                    <br />
                    I have honed my skills in building user-friendly interfaces
                    and implementing best practices in web development.
                    <br />
                    My commitment to staying updated with the latest
                    technologies ensures that I deliver modern and efficient
                    solutions to my clients. With a passion for art, I thrive on
                    collaborating with individuals and businesses that value
                    aesthetics and recognize the power of simplicity.
                  </p>
                </div>

                {/* OBRAZEK */}
                <div className="relative w-full lg:w-1/2 lg:mt-5 overflow-hidden rounded">
                  <img
                    src={Ja}
                    alt="myImage"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0D0D0D] opacity-60 pointer-events-none z-10"></div>
                  <Smile smile_container={props.smile_container} />
                </div>
              </div>
            </div>

            {/* SEKCJA 01 + TEKST ANIMOWANY */}
            <div className="w-full lg:w-3/6 mt-10  md:pb-5 md:pt-5 self-start ps-3">
              <p className="text-base xl:text-xl text-[#EB5939] opacity-50 font-[700] ">
                02/
              </p>
              <AnimatedText />
              <div className="flex mt-10">
                <SmilePlus className="text-[#A89C89]" />
                <p className="text font-bold text-[#EB5939] p-3 ">
                  {" "}
                  Let's have a fun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
