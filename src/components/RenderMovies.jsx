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
  const [data, setData] = useState([]);
  const dataMovies = useSelector((state) => state.data);
  console.log("the data is the fucking", dataMovies.movies);

  if (!dataMovies.movies || dataMovies.movies.length === 0) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="movie-section-title">
        Now Showing Movies{" "}
        <img src="/images/movie-icon.gif" style={{ width: "50px" }} alt="" />
      </h2>

      <div className="d-flex align-items-center justify-content-center row row-cols-3 g-3">
        {dataMovies.movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default RenderMovies;
