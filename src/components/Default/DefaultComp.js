import React from "react";

const DefualtComp = () => {
  return (
    <div className="wrapper">
      <div className="inner-wrapper">
        <h3>Static Default Number</h3>
        <p>{Math.round(Math.random() * 10000)}</p>
      </div>
    </div>
  );
};
export default DefualtComp;
