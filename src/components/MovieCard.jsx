import React from "react";
import "../style/movieCard.css";
import { Button, Container, Stack, Badge, Card } from "react-bootstrap";

function MovieCard(props) {
  const { original_title, poster_path } = props.movie;
  return (
    <Card className="bg-dark p-3" style={{ color: "#ffffff", width: "14rem" }}>
      <div style={{ height: "50%", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <Card.Body className="p-0 mt-3 mb-2 h-50">
        <Card.Title style={{ fontSize: "1rem" }}>{original_title}</Card.Title>
        <Card.Text className="lead" style={{ fontSize: "1rem" }}>
          Sun 8 SEPT-10:00
        </Card.Text>
        <Stack gap={3} direction="horizontal">
          <Button
            href="#"
            className="btn-movie-card"
            class="btn btn-primary btn-sm"
          >
            Tickets
          </Button>
          <Button
            href="#"
            className="btn-movie-card"
            class="btn btn-outline-light "
          >
            Details
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;

/* <div class="card bg-dark col-3 col-md-6" style={{ color: "#ffffff" }}>
<div className="container w-100">
  <div style={{ height: "50%" }}>
    <img
      class="card-img mt-2 rounded"
      src="/images/hero3.jpg"
      alt="Card image cap"
      style={{ height: "100%" }}
    />
  </div>
  <div class="card-body p-0 mt-3 mb-2">
    <h5 class="card-title" style={{ fontSize: "0.8rem" }}>
      Black Panther: Wakanda Forever 2022
    </h5>
    <p class="card-text-s">Some quick example text to</p>
    <Button
      href="#"
      className="btn-movie-card"
      class="btn btn-primary btn-sm"
    >
      Get Tickets
    </Button>
  </div>
</div>
</div> */

/* 
    <Card className="bg-dark p-3" style={{ color: "#ffffff", width: "12rem" }}>
      <div style={{ height: "50%", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <Card.Body className="p-0 mt-3 mb-2 h-50">
        <Card.Title>{original_title}</Card.Title>
        <Card.Text className="">Sun 8 SEPT-10:00</Card.Text>
        <Stack gap={3} direction="horizontal">
          <Button className="btn-movie-card" variant="primary">
            <p className="">Get Tickets</p>
          </Button>
          <Button className="btn-movie-card" variant="outline-light">
            <p>show Trailer</p>
          </Button>
        </Stack>
      </Card.Body>
    </Card>
*/
