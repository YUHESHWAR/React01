import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies")}>
            Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/movie/add")}>
            Add Movie
          </Button>
          <Button color="inherit" onClick={() => navigate("/color-game")}>
            Color Game
          </Button>
          <Button color="inherit" onClick={() => navigate("/employee")}>
            Employees
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
