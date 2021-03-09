import React from "react";
import { withOptimizely } from "@optimizely/react-sdk";

const withOptimizelyHoc = (Component) => {
  const Wrapper = (props) => {
    return <Component {...props} />;
  };
  return withOptimizely(Wrapper);
};

export default withOptimizelyHoc;
