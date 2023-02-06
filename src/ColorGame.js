import { useState } from "react";
import { ColorBox } from "./ColorBox";
import Button from "@mui/material/Button";

export function ColorGame() {
  const [color, setColor] = useState("white");
  const styles = {
    background: color,
    height: "27px",
  };
  const [colorList, setcolorList] = useState([
    "orange",
    "red",
    "lightgreen",
    "lightblue",
  ]);
  return (
    <div className="color-game-block">
      <input
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        type="text"
        placeholder={color}
      />
      <Button
        variant="contained"
        onClick={() => setcolorList([...colorList, color])}
      >
        Add Color
      </Button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
