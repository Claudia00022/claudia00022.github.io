import { useState } from "react";
import contactsData from "../contactsData";
import MagneticEffect from "./MagneticEffect";
import { motion } from "framer-motion";

export default function MediaIcons(props) {

  const [hoverContacts, setHoverContacts] = useState(null);


  return (
    <div className="fixed bottom-10 right-10 z-50 ">
      {contactsData.map((con, index) => (
        <div key={index} className="flex  items-center justify-between w-100">
          <div
            onMouseLeave={() => setHoverContacts(null)}
            className="  h-10 mt-10 me-24 opacity-80  relative "
          >
            <a
              ref={(el) => (props.text_opacity.current[index] = el)}
              onMouseOver={() => setHoverContacts(index)}
              href={con.link}
              className="text opacity-0  font-bold " 
              style={{
                color: "black",
                fontWeight: "bold",
                // fontSize: "30px",
                textTransform: "lowercase",
              }}
            >
              {con.title}
            </a>
            <motion.div
              style={{
                position: "absolute",
                bottom: "0px",
                left: '-50%',
                width: "100%",
                height: "1px",
                backgroundColor: "black",
              }}
              initial={{ scaleX: 0 }}
              animate={
                hoverContacts === index
                  ? { scaleX: 1, x: "100%", opacity: 0 }
                  : { scaleX: 0 }
              }
              transition={{ duration: 1.0, ease: "easeInOut" }}
            />
          </div>
          <MagneticEffect>
            <div className="w-10 h-10 mt-10 opacity-80  ">
              <a href={con.link}>
                <img src={con.img_src} alt="contact photos" />
              </a>
            </div>
          </MagneticEffect>
        </div>
      ))}
    </div>
  );
}

