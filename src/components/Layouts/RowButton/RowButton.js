import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./style.scss";

const RowButton = ({ title, url }) => {
  const history = useHistory();
  return (
    <div className="row-btn-wrapper">
      <div className="row-btn-inner-wrapper">
        <Button
          variant="secondary"
          onClick={() => {
            history.push(url);
          }}
        >
          {title}
        </Button>
      </div>
    </div>
  );
};

export default RowButton;
