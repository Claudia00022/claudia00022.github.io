import { motion } from "framer-motion";
import useScrollSpy from "../useScrollSpy";

const NavBar = () => {
  const sectionIds = ["about", "work", "contact"];
  const activeId = useScrollSpy(sectionIds);

  return (
    <div className="fixed z-20 top-0 right-0 text-[#ffeeca] xs:p-3 xl:p-10  uppercase opacity-70 ">
      <ul className="flex flex-col text xs:text-sm tracking-wider items-end">
        {sectionIds.map((id) => (
          <li key={id}>
            <motion.a
              href={`#${id}`}
              initial={{ opacity: 0 }}
              animate={{
                color: activeId === id ? "#19b9e6" : "#ffeeca",
                opacity: 1,
              }}
              whileHover={{
                opacity: 0.7,
              }}
              transition={{
                duration: 0.3,
              }}
              className="transition-colors font-bold tracking-wider block transform mt-3"
            >
              {id}
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
