import { useState } from "react";

export function Counter() {
    // var like = 10;
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    let likePer = ((like / (like + dislike)) * 100) || 0;
    const styles = {
        color: like > 20 ? "orange" : "blue",
    };
    return (
        <div>
            {like >= 10 ? <h4 style={styles}>You have won the heart of the ppl❤️😂😊</h4> : null}
            <progress className='progress-bar' id="file" max="100" value={likePer}> {likePer} </progress>
            <div className="counter-button-container">
                <button onClick={() => setLike(like + 1)}> 👍 {like}</button>
                <button onClick={() => setDislike(dislike + 1)}> 👎 {dislike}</button>
            </div>
        </div>
    );
}
