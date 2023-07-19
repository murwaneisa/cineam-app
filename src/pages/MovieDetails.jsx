import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie, fetchMovieCastAndTrailer } from "../components/lib/api";
import Section from "../components/lib/Section";
import { Badge, Col, Container, Image, Row, Stack } from "react-bootstrap";
import "../style/movieDetails.css";
import {
  convertMinutesToHoursAndMinutes,
  formatDate,
  languageCodeToName,
} from "../components/lib/helper";
import Loading from "../components/lib/loading";
import { IoMdTime } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";

function MovieDetails() {
  // Access the dynamic route parameter
  const { id } = useParams();
  const [details, setDetails] = useState("");
  const [crew, setCrew] = useState("");

  useEffect(() => {
    try {
      async function fetchMovieDetails() {
        const movie = await fetchMovie(id);
        const movie_cast_video = await fetchMovieCastAndTrailer(id);
        setDetails(movie.data);
        setCrew(movie_cast_video);
      }
      fetchMovieDetails();
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!details) {
    // Display a loading state or return null
    return <Loading />;
  }

  const {
    title,
    poster_path,
    overview,
    runtime,
    release_date,
    genres,
    backdrop_path,
    original_language,
  } = details;
  const genre = genres[0].name;

  const main_actors = crew.crew_actors.slice(0, 4);

  return (
    <Section>
      <Container className="container">
        <Row>
          <Col md={4} xs={12} className="order-md-1 order-xs-2 p-2">
            {/* Image */}
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="Movie"
              className="img-fluid"
            />
          </Col>
          <Col md={6} xs={12} className="order-md-2 order-xs-1">
            {/* Details Text */}
            <div className="text_container">
              <h2>{title}</h2>
              <div className="d-flex flex-wrap align-items-center">
                <div className="tags-container d-inline-flex align-items-center mx-2">
                  <IoMdTime size="20px" />
                  <span>{convertMinutesToHoursAndMinutes(runtime)}</span>
                </div>
                <div className="tags-container d-inline-flex align-items-center align-content-center mx-2">
                  <Badge variant="outline-white" className="mr-1">
                    New
                  </Badge>
                  <span>{genre}</span>
                </div>
                <div className="tags-container d-inline-flex align-items-center mx-2">
                  <LuCalendarDays size="20px" />
                  <span>{formatDate(release_date)}</span>
                </div>
                <div className="tags-container d-inline-flex align-items-center mx-2">
                  <span>{languageCodeToName(original_language, "en")}</span>
                </div>
              </div>
            </div>
            <div className="text_container">
              <p>{overview}</p>
            </div>
            <h4 className="actors_section_title">Actors : </h4>
            <div className="d-flex justify-content-between flex-wrap">
              {main_actors.map((actor) => (
                <div key={actor.id} className="actor-item text-center mb-3">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    className="actor-image rounded-circle"
                  />
                  <p style={{ color: "white" }}>{actor.name}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default MovieDetails;
