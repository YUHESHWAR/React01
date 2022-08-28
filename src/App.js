import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Msg
        name="Hinata"
        image="https://cdn.myanimelist.net/images/characters/11/243919.jpg"
        position="Middle Blocker"
      />
      <Msg
        name="Kageyama"
        image="https://i.pinimg.com/originals/90/2b/97/902b97ee34deae638e57d64d3f12bc3d.jpg"
        position="Setter"
      />
      <Msg
        name="Bokuto"
        image="https://preview.redd.it/qqz2asvw4aj51.jpg?auto=webp&s=90cd37751ee6e34e99d0c33ce3e193352cd085df"
        position="Ace"
      />
    </div>
  );
}

function Msg({ name, image, position }) {
  return (
    <div>
      <img src={image} alt="Img not found" />
      <h1>{name}</h1>
      <h2>{position}</h2>
    </div>
  );
}

export default App;
