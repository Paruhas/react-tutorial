import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./css/AppHeader.css";

function Navbar() {
  const history = useHistory();

  return (
    <div className="app-header">
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/page001">First Page</Link>
        </li>
        <li>
          <Link to="/page002">Second Page</Link>
        </li>
        <li>
          <Link to="/page003">Third Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
