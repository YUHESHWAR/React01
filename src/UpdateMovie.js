import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export default function UpdateMovie() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`https://63e0de2f65b57fe6064b3ed9.mockapi.io/movies/${id}`)
      .then((data) => data.json())
      .then((movie) => setMovie(movie));
  }, []);

  const movieValidationSchema = yup.object({
    name: yup
      .string()
      .required("Dont tell me that the movie doesnt have a name 😜"),
    poster: yup
      .string()
      .required("The movie must obiously have a poster go find one 😜")
      .min(4, "How can a poster be less than 4 characters 😏"),
    rating: yup
      .number()
      .required("Rate this movie now and I'll give you 10 bucks💰")
      .min(0, "The rating should be between 1.0 to 10 Genius🤣")
      .max(10, "The rating should be between 1.0 to 10 Genius🤣"),
    summary: yup
      .string()
      .required("Dont tell me that the movie doesnt have a summary 😜")
      .min(20, "Dude how can a summary be less than 20 letters"),
    trailer: yup
      .string()
      .required("Cmon now find the trailer link 😜")
      .min(4, "The trailer is for sure larger than 4 characters"),
  });
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        trailer: movie.trailer,
        summary: movie.summary,
      },
      enableReinitialize: true,
      validationSchema: movieValidationSchema,
      onSubmit: (values) => {
        console.log(values);
        fetch(`https://63e0de2f65b57fe6064b3ed9.mockapi.io/movies/${id}`, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
          },
        });
        navigate("/movies");
      },
    });

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        name="name"
        id="outlined-basic"
        label="Name"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name && touched.name}
        helperText={errors.name && touched.name ? errors.name : null}
      />
      <TextField
        name="poster"
        id="outlined-basic"
        label="Poster"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.poster && touched.poster}
        helperText={errors.poster && touched.poster ? errors.poster : null}
      />
      <TextField
        name="rating"
        id="outlined-basic"
        label="Rating"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.rating && touched.rating}
        helperText={errors.rating && touched.rating ? errors.rating : null}
      />
      <TextField
        name="summary"
        id="outlined-basic"
        label="Summary"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={values.summary}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.summary && touched.summary}
        helperText={errors.summary && touched.summary ? errors.summary : null}
      />
      <TextField
        name="trailer"
        id="outlined-basic"
        label="Trailer"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={values.trailer}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer ? errors.trailer : null}
      />
      <Button color="success" type="submit" variant="contained">
        Update Movie
      </Button>
    </form>
  );
}
