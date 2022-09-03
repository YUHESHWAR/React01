function Welcome({ name, image }) {
    return (
        <div className='profile-container'>
            <img className='profile-pic' src={image} alt="Img not found" />
            <h1>{name}</h1>
            {/* <Counter /> */}
        </div>
    );
}

const double = (n) => n ** 2;

export { Welcome, double }