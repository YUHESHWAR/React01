import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const styles = {
    color: like > 20 ? "orange" : "blue",
    textAlign: "center",
  };
  return (
    <div className="counter">
      {like >= 10 && like <= 20 ? (
        <h3 style={styles}>You have reached 10 likes</h3>
      ) : null}
      {like > 20 ? (
        <h3 style={styles}>You have reached more than 20 likes</h3>
      ) : null}
      <progress
        className="progress-bar"
        max={100}
        value={(like / (like + dislike)) * 100 || 0}
      ></progress>
      <div className="buttons">
        <button onClick={() => setLike(like + 1)}>👍🏻 {like}</button>
        <button onClick={() => setDislike(dislike + 1)}>👎🏻 {dislike}</button>
        <br />
      </div>
    </div>
  );
}
