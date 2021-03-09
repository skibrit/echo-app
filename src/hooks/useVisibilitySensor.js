import { useEffect, useState } from "react";

const useVisibilitySensor = (element, offset = 0) => {
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", visibilitySensor);
    return () => {
      window.removeEventListener("scroll", visibilitySensor);
    };
  }, []);

  const visibilitySensor = () => {
    if (element) {
      const top = element.current.getBoundingClientRect().top;
      const result = top + offset >= 0 && top - offset <= window.innerHeight;
      setVisibility(result);
    }
  };
  return isVisible;
};

export default useVisibilitySensor;
