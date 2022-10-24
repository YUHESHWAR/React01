import { useState } from "react";
import { ColorList } from './ColorList';
import Button from '@mui/material/Button';

export function ColorGame() {
    const [color, setColor] = useState("white");
    const styles_color = {
        background: color
    };
    const [colorList, setColorList] = useState([
        "red",
        "yellow",
        "pink",
        "orange"
    ]);
    return (
        <div>
            <input
                value={color}
                type="text"
                style={styles_color}
                onChange={(event) => setColor(event.target.value)} />
            <Button
                variant="contained"
                onClick={() => setColorList([...colorList, color])}
            >
                Add Color
            </Button>
            {colorList.map((clr, index) => (
                <ColorList key={index} color={clr} />
            ))}
        </div>
    );
}
