import React from "react";
import "../style/moviesSection.css";
import { Button, Container, Stack, Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { original_title, poster_path, release_date, id, genre_ids } =
    props.movie;
  const genre = genre_ids[0];
  return (
    <Card
      className="bg-dark p-3 m-2  d-flex flex-column"
      style={{ color: "#ffffff", width: "14rem" }}
    >
      <div style={{ height: "70%", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <Card.Body className="p-0 mt-3 mb-2 d-flex flex-column">
        <div className="flex-grow-1">
          <Card.Title
            style={{
              fontSize: "1rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {original_title}
          </Card.Title>
        </div>
        <Card.Text className="lead" style={{ fontSize: "1rem" }}>
          {release_date}
        </Card.Text>
        <Stack gap={3} direction="horizontal">
          <Button
            href="#"
            className="btn-movie-card"
            class="btn btn-primary btn-sm"
          >
            Tickets
          </Button>
          <Link to={`/movies/${genre}/${id}`}>
            <Button className="btn btn-outline-light btn-movie-card bg-dark">
              Details
            </Button>
          </Link>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
