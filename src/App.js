import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import { Welcome, double } from './Welcome'
import { MovieList } from './MovieList';
import { ColorGame } from './ColorGame';
import { Msg } from './Msg';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


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
  //
  const [movieList, setMovieList] = useState([
    {
      name: "Vikram",
      poster: "https://feeds.abplive.com/onecms/images/uploaded-images/2021/07/10/273e787ba809e725948334340c658e68_original.jpg",
      rating: 8.8,
      summary: "Agent Vikram (Kamal) with his masked identity leads a masked gang, who have their own tragic story in their past because of a deadly drug mafia. Agent Vikram fights against the drug mafia headed by Santhanam (Vijay Sethupathi) with the help of an undercover agent Amar (Fahad Fasil) and Narein (Bejoy)."
    },
    {
      name: "RRR",
      poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 6,
      summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Iron man 2",
      poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    },
    {
      name: "No Country for Old Men",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: "Jai Bhim",
      poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.9,
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 7.2,
      summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ratatouille",
      poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    }
  ]);

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
      <AddMovie movieList={movieList} setMovieList={setMovieList} />
      <MovieList movieList={movieList} />

      {/* <ColorGame /> */}

    </div>
  );
}

function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary
    }
    setMovieList([...movieList, newMovie])
  }

  return (
    <div className='add-movi-form'>
      <TextField
        label="Name"
        id="outlined-basic"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        label="Poster"
        id="outlined-basic"
        variant="outlined"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
      />

      <TextField
        label="Rating"
        id="outlined-basic"
        variant="outlined"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />

      <TextField
        label="Summary"
        id="outlined-basic"
        variant="outlined"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />

      <Button
        variant="contained"
        onClick={addMovie}
      >Add Movie</Button>

    </div>
  )
}

export default App;
