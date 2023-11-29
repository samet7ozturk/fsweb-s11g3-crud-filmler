// AddMovieForm.js
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const AddMovieForm = ({ setMovies }) => {
  const { push } = useHistory();

  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description: "",
  });

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/api/movies", newMovie)
      .then((res) => {
        setMovies(res.data);
        push(`/movies/${res.data.id}`);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { title, director, genre, metascore, description } = newMovie;

  return (
    <div className="bg-white rounded-md shadow flex-1">
      <form onSubmit={handleSubmit}>
        <div className="px-5 py-4 border-t border-zinc-200 flex justify-end gap-2">
          <Link to="/movies" className="myButton bg-zinc-500">
            Vazgeç
          </Link>
          <button
            type="submit"
            className="myButton bg-green-700 hover:bg-green-600"
          >
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
