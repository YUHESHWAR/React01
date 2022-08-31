import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const data = [
    {
      name: "Hinata",
      image: "https://cdn.myanimelist.net/images/characters/11/243919.jpg"
    },
    {
      name: "Kageyama",
      image: "https://i.pinimg.com/originals/90/2b/97/902b97ee34deae638e57d64d3f12bc3d.jpg"
    },
    {
      name: "Bokuto",
      image: "https://preview.redd.it/qqz2asvw4aj51.jpg?auto=webp&s=90cd37751ee6e34e99d0c33ce3e193352cd085df"
    }
  ]
  return (
    <div className="App">
      {data.map(({ name, image }) => (
        <Welcome name={name} image={image} />
      ))}

      {/* <Welcome name="Ajith" />  */}

      {/* <Msg
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
      /> */}

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

function Welcome({ name, image }) {
  return (
    <div className='profile-container'>
      <img src={image} alt="Img not found" />
      <h1>{name}</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  // var like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  let likePer = (like / (like + dislike)) * 100
  const styles = {
    color: like > 20 ? "orange" : "blue",
  }
  return (
    <div>
      {like >= 10 ? <h4 style={styles}>You have won the heart of the ppl❤️😂😊</h4> : null}
      <progress className='progress-bar' id="file" max="100" value={likePer}> {likePer} </progress>
      <div class="counter-button-container">
        <button onClick={() => setLike(like + 1)}> 👍 {like}</button>
        <button onClick={() => setDislike(dislike + 1)}> 👎 {dislike}</button>
      </div>
    </div>
  );
}

export default App;
