import React, { useState } from "react";
import { withOptimizely } from "@optimizely/react-sdk";

const SumComp = ({ optimizely }) => {
  const [num, setNum] = useState(0);
  const sumHandler = () => {
    setNum((prevVal) => {
      return prevVal + 2;
    });
    optimizely.track("Sum");
  };
  return (
    <div className="wrapper">
      <div className="inner-wrapper">
        <h3>Sum 2 on each click</h3>
        <p>{num}</p>
        <button onClick={sumHandler}>Click</button>
      </div>
    </div>
  );
};
export default withOptimizely(SumComp);
