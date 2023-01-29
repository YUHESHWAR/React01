export function ColorBox({ color }) {
  const styles = {
    height: "25px",
    width: "225px",
    background: color,
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
