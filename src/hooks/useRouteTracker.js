import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useRouteTracker = (optimizely) => {
  const history = useHistory();

  useEffect(() => {
    trackPath();
  }, []);

  const trackPath = () => {
    try {
      if (!optimizely) return;
      console.log(`History `, history);
      const {
        location: { pathname },
      } = history;
      let finalPathName = "home";
      if (pathname) {
        let newPathname = pathname.substring(1);
        if (newPathname) {
          let pathArr = newPathname.split("/");
          finalPathName = pathArr[0];
        }
      }
      console.log(`Final Path Name `, finalPathName);
      optimizely.track(`${finalPathName}_page_view`);
    } catch (e) {
      console.log(e);
    }
  };

  return true;
};

export default useRouteTracker;
