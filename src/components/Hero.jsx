import React, { useEffect } from "react";
import { Button, Container, Stack, Badge } from "react-bootstrap";
import "../style/hero.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "./lib/loading";

function HeroSection() {
  const movieData = useSelector((state) => state.data.movies[0]);
  if (movieData === undefined) {
    return <Loading />;
  }
  console.log("the movies", movieData);
  const {
    backdrop_path,
    original_title,
    overview,
    release_date,
    id,
    genre_ids,
  } = movieData;
  const genre = genre_ids[0];
  const url = `https://image.tmdb.org/t/p/w1280${backdrop_path}`;

  return (
    <header
      className="masthead"
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container h-100 text-left">
        <div className="row h-100 align-items-end ">
          <div className="col-12 mb-4">
            <h1 className="fw-light">{original_title}</h1>
            <span className="date">{release_date}</span>
            <p className="lead w-50 ">{overview}</p>
            <p>
              Director: <span className="director">Ryan Coogler</span>
            </p>

            <Stack direction="horizontal" gap={3}>
              <Button className="btn-hero" variant="primary">
                Get Ticket
              </Button>
              <Link to={`/movies/${genre}/${id}`}>
                <Button className="btn-secondary">Details</Button>
              </Link>
            </Stack>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
