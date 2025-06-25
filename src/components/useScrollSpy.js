import { useEffect, useState } from "react";

const useScrollSpy = (sectionIds) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let found = false;

      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveId(id);
            found = true;
            break;
          }
        }
      }

      if (!found) {
        setActiveId(""); // 🔁 reset do pustego stringa, jeśli żadna sekcja nie pasuje
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // wywołanie na start

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeId;
};

export default useScrollSpy;

