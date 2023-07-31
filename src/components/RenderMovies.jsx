import React, { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import MovieCard from "./MovieCard";
import "../style/moviesSection.css";
import { fetchData } from "./lib/api";
import { useDispatch } from "react-redux";
import Loading from "../components/lib/loading";
import { screening } from "./lib/helper";
import { setScreens } from "./redux/slice";

const RenderMovies = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const result = await fetchData();
        setData(result.data.results);
        /*  console.log("the data", result.data.results[0]); */
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovies();
  }, []);

  const screenings = screening(data);
  dispatch(setScreens(screenings));
  console.log("the screening array", screenings);

  if (data.length == 0) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="movie-section-title">
        Now Showing Movies{" "}
        <img src="/images/movie-icon.gif" style={{ width: "50px" }} alt="" />
      </h2>

      <div className="d-flex align-items-center justify-content-center row row-cols-3 g-3">
        {data.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default RenderMovies;
