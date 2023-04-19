import React from "react";
import { Container, Stack } from "react-bootstrap";
import MovieCard from "./MovieCard";

function RenderMovies() {
  return (
    <Stack
      gap={3}
      direction="horizontal vertical-md"
      className=" p-4 "
      style={{ backgroundColor: "#000000" }}
    >
      <MovieCard />
      <MovieCard />
    </Stack>
  );
}

export default RenderMovies;
