import React from "react";
import "./css/Grid.css";

function Grid({ children, columnNumber }) {
  const girdColumnNumber = `grid-${columnNumber}`;

  return <div className={girdColumnNumber}>{children}</div>;
}

export default Grid;
