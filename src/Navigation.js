import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/movie/add">Add Movie</Link>
      <Link to="/color-game">Color Game</Link>
      <Link to="/employee">Employee</Link>
    </div>
  );
}
