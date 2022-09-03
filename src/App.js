import logo from './logo.svg';
import './App.css';
import { Welcome, double } from './Welcome'
import { MovieList } from './MovieList';
import { ColorGame } from './ColorGame';
import { Msg } from './Msg';

// console.log(double(100))

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
      {/* {data.map(({ name, image }) => (
        <Welcome name={name} image={image} />
      ))} */}

      {/* <Welcome name="Ajith" /> */}

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

      {/* <MovieList /> */}

      {/* <ColorGame /> */}

    </div>
  );
}

export default App;
