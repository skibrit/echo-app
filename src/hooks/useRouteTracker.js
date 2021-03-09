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
      const finalPathName = pathname?.substring(1)?.split("/")[0] || "home";
      console.log(`Final Path Name `, finalPathName);
      optimizely.track(`${finalPathName}_page_view`);
    } catch (e) {
      console.log(e);
    }
  };

  return true;
};

export default useRouteTracker;
