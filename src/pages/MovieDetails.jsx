import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../components/lib/api";
import Section from "../components/lib/Section";
import { Col, Container, Row, Stack } from "react-bootstrap";
import "../style/movieDetails.css";
import { convertMinutesToHoursAndMinutes } from "../components/lib/helper";
import Loading from "../components/lib/loading";
import { BiTime } from "react-icons/bi";

function MovieDetails() {
  // Access the dynamic route parameter
  const { id } = useParams();
  const [details, setDetails] = useState("");

  useEffect(() => {
    try {
      async function fetchMovieDetails() {
        const movie = await fetchMovie(id);
        setDetails(movie.data);
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

  console.log("the id details  ", details);
  const { title, poster_path, overview, runtime, release_date, genres } =
    details;
  const genre = genres[0].name;
  console.log("the genre details ", genres);
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
              <Stack direction="horizontal" gap={3}>
                <div className="tags-container">
                  <BiTime size={"20px"} />
                  <spn>{convertMinutesToHoursAndMinutes(runtime)}</spn>
                </div>
                <span>{genre}</span>
                <span>{release_date}</span>
              </Stack>
            </div>
            <div className="text_container">
              <p>{overview}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default MovieDetails;
