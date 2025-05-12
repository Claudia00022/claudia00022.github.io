import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({ z: null, w: null });



  const updateScrollPOsition = () =>{
    setScrollPosition({
      z: window.scrollX,
      w: window.scrollY
    })
  }


  useEffect(() => {
    window.addEventListener("scroll", updateScrollPOsition);

    return () => { 
       window.removeEventListener('scroll', updateScrollPOsition);
  };
 },[]);
    


  return scrollPosition;

};

export default useScrollPosition;