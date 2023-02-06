import "./App.css";
import { Msg } from "./Msg";
import { MovieList } from "./MovieList";
import { ColorGame } from "./ColorGame";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import NotFound from "./NotFound";
import { AddMovie } from "./AddMovie";
import Context from "./Context";
import Employee from "./Employee";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeView from "./EmployeeView";
import About from "./About";
import { Home } from "./Home";
import MovieDetails from "./MovieDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function App() {
  const users = [
    {
      name: "Ajith",
      url: "data:image/jpeg;base64,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",
    },
    {
      name: "Vijay",
      url: "data:image/jpeg;base64,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",
    },
    {
      name: "STR",
      url: "https://pbs.twimg.com/profile_images/1513892092375830529/hHnuoVL1_400x400.jpg",
    },
    {
      name: "SK",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHTc7edKDzNid7vBPLhiWEp89bPfTNvTd4g&usqp=CAU",
    },
  ];
  const [movieList, setMovieList] = useState([
    {
      id: "1",
      name: "Vikram",
      poster:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
      rating: 8.4,
      summary:
        "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai. ",
      trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
    },
    {
      id: "2",
      name: "RRR",
      poster:
        "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      rating: 7.9,
      summary:
        "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
      trailer: "https://www.youtube.com/embed/oO8TTM2FgIA",
    },
    {
      id: "3",
      name: "Bahubali",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
      rating: 8.1,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/64KCdvkgk2M",
    },
    {
      id: "4",
      name: "Ok Kanmani",
      poster:
        "https://i.scdn.co/image/ab67616d0000b2732318539f1b037d942fafa581",
      rating: 9.1,
      summary:
        "Two youngsters Adi and Tara are attracted to each other when they meet at a wedding. Since they do not believe in marriage, they decide to live together. What follows forms the crux of the story.",
      trailer: "https://www.youtube.com/embed/2mBG4vlhcCc",
    },
    {
      id: "5",
      name: "Inception",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 8.1,
      summary:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: "6",
      name: "Ant Man",
      poster: "http://www.movienewsletters.net/photos/208057R1.jpg",
      rating: 7.1,
      summary:
        "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements.",
      trailer: "https://www.youtube.com/embed/pWdKf3MneyI",
    },
    {
      id: "7",
      name: "Black Panther",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
      rating: 7.3,
      summary:
        "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.And has an idea to expand to the outer world",
      trailer: "https://www.youtube.com/embed/xjDjIWPwcPU",
    },
    {
      id: "8",
      name: "Captain America",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_FMjpg_UX1000_.jpg",
      rating: 6.9,
      summary:
        "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation.",
      trailer: "https://www.youtube.com/embed/W4DlMggBPvc",
    },
  ]);
  const [data, setData] = useState([
    {
      name: "Nathan Mohr",
      email: "Dianna_Weimann99@yahoo.com",
      address: "Bothell",
      username: "Zita.Johnson48",
      id: "1",
    },
    {
      name: "Rosie Cartwright",
      email: "Hilton_Hettinger@hotmail.com",
      address: "Hermanhaven",
      username: "Bruce.Kerluke",
      id: "2",
    },
    {
      name: "Candace Gerlach",
      email: "Garfield.Bauch84@gmail.com",
      address: "Everett",
      username: "Nathaniel.Luettgen89",
      id: "3",
    },
    {
      name: "Roberta Hoppe",
      email: "Myles_Beer99@gmail.com",
      address: "East Ashtyn",
      username: "Novella.West",
      id: "4",
    },
    {
      name: "Miss Katherine Barrows",
      email: "Maximilian_Quigley39@yahoo.com",
      address: "Koelpinhaven",
      username: "Melody_Becker47",
      id: "5",
    },
    {
      name: "Ervin Kuvalis",
      email: "Brandyn71@yahoo.com",
      address: "Jakaylaport",
      username: "Noemie.Connelly",
      id: "6",
    },
    {
      name: "Mr. Ed Reinger",
      email: "Brannon.Zulauf49@gmail.com",
      address: "New Bonnie",
      username: "Matilda70",
      id: "7",
    },
    {
      name: "Sidney Ledner",
      email: "Josiane69@yahoo.com",
      address: "Melvinside",
      username: "Estefania.Rodriguez59",
      id: "8",
    },
    {
      name: "Rufus Fritsch",
      email: "Aditya.Lynch@yahoo.com",
      address: "Russelview",
      username: "Ernie_Von",
      id: "9",
    },
    {
      name: "Jenny Ryan",
      email: "Kristy_Gleichner93@yahoo.com",
      address: "Jerdefield",
      username: "Avery.Lind",
      id: "10",
    },
  ]);
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: "100vh", borderRadius: "0px" }} elevation={3}>
        <div className="App">
          {/* <div>
        {users.map(({ name, url }) => (
          <Msg name={name} url={url} />
        ))}
      </div> */}
          <Context.Provider
            value={{
              movieList,
              setMovieList,
              data,
              setData,
              mode,
              setMode,
            }}
          >
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<MovieList />} />
              <Route
                path="/films"
                element={<Navigate replace to="/movies" />}
              />
              <Route path="/movie/add" element={<AddMovie />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/color-game" element={<ColorGame />} />
              <Route path="/about" element={<About />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/employee/create" element={<EmployeeCreate />} />
              <Route path="/employee/view/:id" element={<EmployeeView />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Context.Provider>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
