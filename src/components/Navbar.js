import React from "react";
import { Link } from "react-router-dom";
import "./css/AppHeader.css";

function Navbar() {
  return (
    <div className="app-header">
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/page001">FirstPage</Link>
        </li>
        <li>
          <Link to="/page002">SecondPage</Link>
        </li>
        <li>
          <Link to="/page003">ThirdPage</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
