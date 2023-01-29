import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/employee">Employee</Link>
        </li>
      </ul>
    </div>
  );
}
