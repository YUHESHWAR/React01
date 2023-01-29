import { Counter } from "./Counter";

export function Msg({ name, url }) {
  const styles = {
    height: "360px",
    width: "230px",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <img className="profile" src={url} />
      <h1>Hello {name} 😀😀</h1>
      <Counter />
    </div>
  );
}
