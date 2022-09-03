export function Msg({ name, image, position }) {
    return (
        <div>
            <img src={image} alt="Img not found" />
            <h1>{name}</h1>
            <h2>{position}</h2>
        </div>
    );
}
