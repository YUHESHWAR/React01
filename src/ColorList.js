export function ColorList({ color }) {

    const styles = {
        height: "20.5px",
        width: "172px",
        background: color,
        margin: "10px",
        padding: "5px"
    };
    return <div style={styles}>
        {color}
    </div>;
}
