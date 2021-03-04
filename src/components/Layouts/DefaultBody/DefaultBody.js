import React from "react";
import "./style.scss";

const DefaultBody = ({ content }) => {
  return (
    <div className="default-body-wrapper">
      <h4 className="default-body-text">{content}</h4>
    </div>
  );
};

export default DefaultBody;
