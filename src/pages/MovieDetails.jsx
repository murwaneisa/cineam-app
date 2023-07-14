import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../components/lib/api";

function MovieDetails() {
  // Access the dynamic route parameter
  const { id } = useParams();

  useEffect(() => {
    try {
      async function fetchMovieDetails() {
        const movie = await fetchMovie(id);
        console.log("the movie details", movie.data);
      }
      fetchMovieDetails();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  console.log("the id ", id);
  return <div>MovieDetails</div>;
}

export default MovieDetails;
