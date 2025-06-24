import { useState } from "react";
import contactsData from "../contactsData";
import MagneticEffect from "./MagneticEffect";
import { motion } from "framer-motion";

export default function MediaIcons() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="xs:hidden lg:block fixed bottom-5 left-5 z-50 ">
      {contactsData.map((con, index) => {
        const Icon = con.icon;

        return (
          <div key={index} className="flex items-center justify-between w-full">
            <MagneticEffect>
              <div
                className="relative mt-5 p-3 rounded-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Motion background behind icon */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#f5b061] z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.7 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                <a
                  href={con.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center justify-center w-10 h-10"
                >
                  <Icon className="w-5 h-5 text-[#ffeeca]" />
                </a>
              </div>
            </MagneticEffect>
          </div>
        );
      })}
    </div>
  );
}
