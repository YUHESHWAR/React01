import React from "react";

export default function NotFound() {
  const styles = {
    width: "100%",
    objectFit: "contain",
  };
  return (
    <div>
      <img
        style={styles}
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt="404 Page"
      />
    </div>
  );
}
