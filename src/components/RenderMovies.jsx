import React, { Component } from "react";
import { Container, Stack } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { fetchData } from "./lib/api";

class RenderMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const result = await fetchData();
      this.setState({ data: result.data.results });
      console.log("the data", result.data.results[0]);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <Stack
        gap={3}
        direction="horizontal vertical-md"
        className=" p-4 "
        style={{ backgroundColor: "#000000" }}
      >
        {data.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </Stack>
    );
  }
}

export default RenderMovies;
