import React from "react";
import MovieCard from "../MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

const MovieCarousel = ({ related_movies }) => {
  const settings = {
    className: "slider variable-width center",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <Container>
      <Slider {...settings}>
        {related_movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default MovieCarousel;
