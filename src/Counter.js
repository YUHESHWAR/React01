import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const styles = {
    color: like > 20 ? "orange" : "blue",
    textAlign: "center",
  };
  const increamentLike = () => setLike(like + 1);
  const increamentDislike = () => setDislike(dislike + 1);
  return (
    <div className="counter">
      {/* {like >= 10 && like <= 20 ? (
        <h3 style={styles}>You have reached 10 likes</h3>
      ) : null}
      {like > 20 ? (
        <h3 style={styles}>You have reached more than 20 likes</h3>
      ) : null}
      <progress
        className="progress-bar"
        max={100}
        value={(like / (like + dislike)) * 100 || 0}
      ></progress> */}
      <div className="buttons">
        <IconButton
          aria-label="Like Movie"
          color="primary"
          onClick={increamentLike}
          sx={{ fontSize: "24px" }}
        >
          <Badge badgeContent={like} color="primary">
            👍
          </Badge>
        </IconButton>

        <IconButton
          aria-label="DisLike Movie"
          color="primary"
          onClick={increamentDislike}
          sx={{ fontSize: "24px" }}
        >
          <Badge badgeContent={dislike} color="error">
            👎
          </Badge>
        </IconButton>
        <br />
      </div>
    </div>
  );
}
