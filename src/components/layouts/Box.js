import React from "react";
import "./css/Box.css";

function Box(props) {
  return <div className="box">{props.children}</div>;
}

export default Box;
