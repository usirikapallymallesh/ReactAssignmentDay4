import React from "react";
import "./CardComponent.css";

const CardComponent = (props) => {
  const { color, hexCode } = props;
  // console.log(props);
  return (
    <div className="card">
      <div className="card-color" style={{ backgroundColor: color }}></div>
      <div className="color-text">
        <h1>{hexCode}</h1>
        <p style={{ color: color }}>{color}</p>
      </div>
    </div>
  );
};

export default CardComponent;
