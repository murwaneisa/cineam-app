import React, { Component } from "react";
import { Container, Stack } from "react-bootstrap";
import MovieCard from "./MovieCard";
import "../style/moviesSection.css";
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
      /*  console.log("the data", result.data.results[0]); */
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2 className="movie-section-title">
          Now Showing Movies <img src="/images/show-icon.gif" alt="" />
        </h2>

        <div class="d-flex align-items-center justify-content-center row row-cols-3 g-3">
          {data.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      </div>
    );
  }
}

export default RenderMovies;
