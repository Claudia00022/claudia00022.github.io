
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Sprawdź czy to Firefox
    const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
    
    if (isFirefox) {
      // Dla Firefoxa nie inicjalizuj Lenis
      return;
    }

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
