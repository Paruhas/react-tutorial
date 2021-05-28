import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">First Page</Link>
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
