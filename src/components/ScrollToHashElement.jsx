import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const { hash, pathname, key } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        const timeoutId = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
        return () => clearTimeout(timeoutId);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname, key]);

  return null;
};

export default ScrollToHashElement;