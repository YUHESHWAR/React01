import { useState } from "react";
import { ColorList } from './ColorList';

export function ColorGame() {
    const colorList = [
        "red",
        "yellow",
        "pink",
        "orange"
    ];
    const [color, setColor] = useState("white");
    const styles_color = {
        background: color
    };
    return (
        <div>
            <input
                value={color}
                type="text"
                style={styles_color}
                onChange={(event) => setColor(event.target.value)} />
            {colorList.map((clr, index) => (
                <ColorList key={index} color={clr} />
            ))}
        </div>
    );
}
