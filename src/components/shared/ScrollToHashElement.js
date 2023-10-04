import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  let location = useLocation();

  let hashElement = useMemo(() => {
    let hash = location.hash;
    const removeHashCharacter = (str) => {
      return str.slice(1);
      
    };

    if (hash) {
      let element = document.getElementById(removeHashCharacter(hash));
      console.log(hash)
      return element;
      
    } else {
      return null;
    }
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;