import { useEffect } from "react";
import useVisibilitySensor from "./useVisibilitySensor";

const useViewTracker = (element, eventKey, optimizely, timer = 10000) => {
  const isVisible = useVisibilitySensor(element, -200);

  useEffect(() => {
    if (!window.timerControllers) {
      window.timerControllers = {};
    }
  }, []);

  useEffect(() => {
    if (eventKey && optimizely) timerHandler();
  }, [isVisible]);

  const timerHandler = () => {
    try {
      const timerController = window.timerControllers[eventKey];
      if (isVisible && !timerController) {
        console.log(`${eventKey} Timer Set up`);
        window.timerControllers[eventKey] = setTimeout(trackViewHandler, timer);
      } else if (!isVisible && timerController) {
        console.log(`${eventKey} Timer Cancelled`);
        clearTimeout(timerController);
        window.timerControllers[eventKey] = null;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const trackViewHandler = () => {
    try {
      window.timerControllers[eventKey] = null;
      optimizely.track(`${eventKey.toLowerCase()}_viewed`);
    } catch (e) {
      console.log(e);
    }
  };
  return true;
};

export default useViewTracker;
