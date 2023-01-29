import { Movie } from "./Movie";

export function MovieList() {
  const movie = [
    {
      name: "Vikram",
      poster:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
      rating: 8.4,
      summary:
        "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai. ",
    },
    {
      name: "RRR",
      poster:
        "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      rating: 7.9,
      summary:
        "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
    },
    {
      name: "Bahubali : The beginning",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
      rating: 8.1,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ant Man",
      poster: "http://www.movienewsletters.net/photos/208057R1.jpg",
      rating: 7.1,
      summary:
        "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements.",
    },
    {
      name: "Black Panther",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
      rating: 7.3,
      summary:
        "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.",
    },
    {
      name: "Captain America",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_FMjpg_UX1000_.jpg",
      rating: 6.9,
      summary:
        "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation.",
    },
  ];
  return (
    <div className="movie-list">
      {movie.map((mv, index) => (
        <Movie key={index} movie={mv} />
      ))}
    </div>
  );
}
