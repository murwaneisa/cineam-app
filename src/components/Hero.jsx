import React from "react";
import { Button, Container } from "react-bootstrap";

function HeroSection() {
  return (
    <Container
      style={{
        backgroundImage: `url(https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container>
        <h1>The Lord of the Rings: The Fellowship of the Ring</h1>
        <p className="lead">
          Directed by Peter Jackson | Starring Elijah Wood, Ian McKellen,
          Orlando Bloom
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          ullamcorper mauris, vel molestie quam commodo ac. Praesent suscipit
          nulla non neque faucibus, sit amet bibendum ipsum commodo. In
          eleifend, erat non faucibus consequat, neque nunc vestibulum felis, a
          aliquet sapien mi quis purus.
        </p>
        <p>
          <Button variant="primary" size="lg" className="mr-2">
            Book Tickets
          </Button>
          <Button variant="outline-light" size="lg">
            Watch Trailer
          </Button>
        </p>
      </Container>
    </Container>
  );
}

export default HeroSection;
