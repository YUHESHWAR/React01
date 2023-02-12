import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Context from "./Context";

export default function Navigation() {
  const consumer = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div>
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
          </div>
          <Button
            startIcon={
              consumer.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )
            }
            color="inherit"
            onClick={() =>
              consumer.setMode(consumer.mode === "dark" ? "light" : "dark")
            }
          >
            {consumer.mode === "dark" ? "light" : "dark"} Mode
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
