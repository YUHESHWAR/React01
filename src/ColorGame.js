import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function ColorGame() {
  const [color, setColor] = useState("white");
  const styles = {
    background: color,
  };
  const [colorList, setcolorList] = useState([
    "orange",
    "red",
    "lightgreen",
    "lightblue",
  ]);
  return (
    <div>
      <input
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        type="text"
        placeholder={color}
      />
      <button onClick={() => setcolorList([...colorList, color])}>
        Add Color
      </button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
