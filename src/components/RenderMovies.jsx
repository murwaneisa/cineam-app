import React, { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import MovieCard from "./MovieCard";
import "../style/moviesSection.css";
import { fetchData } from "./lib/api";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/lib/loading";
import { screening } from "./lib/helper";
import { setScreens, setMovies } from "./redux/slice";

const RenderMovies = () => {
  /*   const [data, setData] = useState([]); */
  const data = useSelector((state) => state.data);

  if (!data.movies || data.movies.length === 0) {
    return <Loading />;
  }
  let selectedMovies;
  if (data.category === 0) {
    selectedMovies = data.movies;
  } else {
    selectedMovies = data.movies.filter(
      (movie) => movie.genre_ids[0] === data.category
    );
  }
  /*   const genreId = data.category;
  console.log("the data is the fucking", genreId); */
  return (
    <div>
      <h2 className="movie-section-title">
        Now Showing Movies{" "}
        <img src="/images/movie-icon.gif" style={{ width: "50px" }} alt="" />
      </h2>

      <div className="d-flex align-items-center justify-content-center row row-cols-3 g-3">
        {selectedMovies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default RenderMovies;
