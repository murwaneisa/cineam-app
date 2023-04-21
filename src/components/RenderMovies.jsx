import React, { Component } from "react";
import { Container, Stack } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { fetchData } from "./lib/api";

class RenderMovies extends Component {
  async componentDidMount() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
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
}

export default RenderMovies;
