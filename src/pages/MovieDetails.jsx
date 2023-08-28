import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchData,
  fetchMovie,
  fetchMovieCastAndTrailer,
} from "../components/lib/api";
import Section from "../components/lib/Section";
import {
  Badge,
  Button,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from "react-bootstrap";
import "../style/movieDetails.css";
import {
  convertMinutesToHoursAndMinutes,
  formatDate,
  languageCodeToName,
} from "../components/lib/helper";
import Loading from "../components/lib/loading";
import { IoMdTime } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import VideoPlayer from "../components/lib/vidoePlayer";
import MovieCard from "../components/MovieCard";
import MovieCarousel from "../components/lib/MovieCarousel ";

function MovieDetails() {
  // Access the dynamic route parameter
  const { id, genreId } = useParams();
  const [details, setDetails] = useState("");
  const [crewAndTrailer, setCrewAndTrailer] = useState("");
  const [movies, setMovies] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const foundMovieDate = useSelector((state) => state.data);

  useEffect(() => {
    try {
      async function fetchMovieDetails() {
        const movie = await fetchMovie(id);
        const movie_cast_video = await fetchMovieCastAndTrailer(id);
        const movies = await fetchData();
        setDetails(movie.data);
        setCrewAndTrailer(movie_cast_video);
        setMovies(movies.data.results);
      }
      fetchMovieDetails();
    } catch (error) {
      console.log(error);
    }
  }, [id]);
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

  const main_actors = crewAndTrailer.crew_actors.slice(0, 4);

  let trailer_key;
  if (crewAndTrailer.trailer) {
    // check if there is trailer key
    trailer_key = crewAndTrailer.trailer.key;
  }
  const related_movies = movies.filter(
    (movie) => movie.genre_ids[0] == genreId
  );

  const showTime = foundMovieDate.screens.find(
    (screen) => screen.movieId == id
  );

  const auditoriumId = showTime.auditoriumId;

  return (
    <Section>
      <Container
        /* style={{ border: "solid 2px red " }} */
        className="container d-flex "
      >
        <Row>
          <Col
            lg={3}
            md={5}
            xs={12}
            className="order-md-1 order-xs-2 p-2  justify-content-center align-item-center"
            style={{ marginRight: "30px" }}
          >
            {/* Image */}

            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="Movie"
              className="img-fluid "
              style={{
                width: "100%",
                maxWidth: "300px",
                alignContent: "center",
              }}
            />
            <div className="mt-3 d-flex flex-row flex-md-col align-items-center">
              <Link to={`/booking/${auditoriumId}/${id}`}>
                <Button className="btn-get-ticket">Get Ticket</Button>
              </Link>
              <Button
                className="btn-details"
                variant="outLine-primary"
                onClick={handleShow}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <AiOutlinePlayCircle size="2rem" color="#ffffff" />
                  <span className="btn-trailer">Watch Trailer</span>
                </div>
              </Button>
            </div>
            {/* the show time  */}
            {/*       <div style={{ color: "white" }}>{showTime.time}</div> */}
          </Col>
          <Col md={5} xs={12} className="order-md-2 order-xs-1">
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
                  <span>{languageCodeToName(original_language, "en")}</span>
                </div>
                <div className="tags-container d-inline-flex align-items-center mx-2">
                  <LuCalendarDays size="20px" />
                  {/* <span>{formatDate(release_date)}</span> */}
                  <span>{showTime.time}</span>
                </div>
              </div>
            </div>
            <div className="text_container">
              <p>{overview}</p>
            </div>
            <h4 className="actors_section_title">Cost: </h4>
            <div className="d-flex justify-content-between flex-wrap mt-1 mt-md-5">
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
      {/* the trailer video */}
      <VideoPlayer
        handleClose={handleClose}
        show={show}
        trailer_key={trailer_key}
      />
      {/* the related movies */}
      <Container>
        <h3 className="related_movies_title">Related movies</h3>
      </Container>
      <MovieCarousel related_movies={related_movies} />
    </Section>
  );
}

export default MovieDetails;
