import React, { useState } from "react";
import Section from "../components/lib/Section";
import {
  Row,
  Col,
  Card,
  Container,
  Image,
  Button,
  FormControl,
  Stack,
} from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import "../style/booking.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/lib/loading";
import { seats } from "../components/lib/seats";

function Booking() {
  const { id } = useParams();
  const movies = useSelector((state) => state.data);
  const movieInfo = movies.movies.find((movie) => movie.id == id);
  const [ticketQuantities, setTicketQuantities] = useState({
    adult: 1,
    senior: 0,
    child: 0,
  });
  const [selectedSeats, setSelectedSeats] = useState([]);
  // Your provided seats array
  const totalAudience =
    ticketQuantities.adult + ticketQuantities.senior + ticketQuantities.child;
  const handleSeatClick = (clickedSeatId) => {
    setSelectedSeats([clickedSeatId]);
    const adjacentSeats = [];

    // Find the clicked seat's index in the seats array
    const clickedSeatIndex = seats.findIndex(
      (seat) => seat.id === clickedSeatId
    );

    // Loop through the seats to find adjacent empty seats
    for (let i = clickedSeatIndex; i < seats.length; i++) {
      const seat = seats[i];
      if (!selectedSeats.includes(seat.id)) {
        adjacentSeats.push(seat.id);
      }
      if (adjacentSeats.length >= totalAudience) {
        break;
      }
    }

    setSelectedSeats([...selectedSeats, ...adjacentSeats]);
  };

  const handleQuantityChange = (type, value) => {
    setTicketQuantities((prevQuantities) => ({
      ...prevQuantities,
      [type]: Math.max(prevQuantities[type] + value, 0), // Ensure quantity doesn't go below 1
    }));
  };
  console.log("the quantities number is ", ticketQuantities.adult);

  if (!movieInfo || Object.keys(movieInfo).length === 0) {
    return <Loading />; //loading status until the the useSelector hook get the data
  }
  const auditorium = movies.data.find((audi) => audi.movieId == id);
  /* console.log("first", auditorium); */
  const ticketSum =
    ticketQuantities.adult * 85 +
    ticketQuantities.senior * 75 +
    ticketQuantities.child * 65;
  console.log("the ticket sum ", ticketSum);
  return (
    <Section>
      <Container>
        <Row>
          {/* the ticket type section */}
          <Col lg={5} md={6} xs={12}>
            {/* the movie info section */}
            <Stack direction="horizontal" gap={3}>
              <div className="image-container">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                  fluid
                />
              </div>
              <Col>
                <p className="movie-info-title">{movieInfo.title}</p>
                <p className="movie-info-subtitle">{auditorium.time}</p>
                <p className="movie-info-subtitle">
                  Sal number : {auditorium.auditoriumId}
                </p>
              </Col>
            </Stack>
            {/* the ticket selection section  */}
            <Stack gap={3} className="mt-5">
              <h4 className="ticket-selection-title">
                Select the number of tickets
              </h4>
              <Stack direction="horizontal">
                <Col className="ticket-type">
                  Adult{" "}
                  <p className="ticket-price-line">1 st adult is 85 kr </p>
                </Col>

                <Col className="d-flex align-items-center">
                  <Button
                    variant="link"
                    className="increment-button"
                    onClick={() => handleQuantityChange("adult", -1)}
                  >
                    <AiOutlineMinus color="#ffffff" />
                  </Button>
                  <span className="selected-number">
                    {ticketQuantities.adult}
                  </span>
                  <Button
                    variant="link"
                    className="increment-button"
                    onClick={() => handleQuantityChange("adult", 1)}
                  >
                    <AiOutlinePlus color="#ffffff" />
                  </Button>
                </Col>
              </Stack>
              <Stack direction="horizontal">
                <Col className="ticket-type">
                  Senior
                  <p className="ticket-price-line">
                    1 st senior ( + 65 ) is 75 kr{" "}
                  </p>{" "}
                </Col>
                <Col className="d-flex align-items-center">
                  <Button
                    variant="link"
                    className="increment-button"
                    onClick={() => handleQuantityChange("senior", -1)}
                  >
                    <AiOutlineMinus color="#ffffff" />
                  </Button>
                  <span className="selected-number">
                    {ticketQuantities.senior}
                  </span>
                  <Button
                    variant="link"
                    className="increment-button"
                    onClick={() => handleQuantityChange("senior", 1)}
                  >
                    <AiOutlinePlus color="#ffffff" />
                  </Button>
                </Col>
              </Stack>
              <Stack direction="horizontal">
                <Col className="ticket-type">
                  children
                  <p className="ticket-price-line">
                    1 st child (- 12 ) is 65 kr{" "}
                  </p>{" "}
                </Col>
                <Col className="d-flex align-items-center">
                  <Button
                    variant="link"
                    className="increment-button"
                    onClick={() => handleQuantityChange("child", -1)}
                  >
                    <AiOutlineMinus color="#ffffff" />
                  </Button>
                  <span className="selected-number">
                    {ticketQuantities.child}
                  </span>
                  <Button
                    variant="link"
                    className="increment-button"
                    onClick={() => handleQuantityChange("child", 1)}
                  >
                    <AiOutlinePlus color="#ffffff" />
                  </Button>
                </Col>
              </Stack>
              <p className="ticket-selection-title">
                Total sum : {ticketSum} kr
              </p>
            </Stack>
          </Col>
          <Col style={{ border: "solid 2px red" }}>
            <Stack className="align-items-center  justify-content-center">
              <Image
                src="/images/screen.png"
                alt="Screen Image"
                className="screen-image-container"
              />
              <Container>
                <Col className="seat-col">
                  <div className="seat-container">
                    {seats.map((seat) => (
                      <div
                        key={seat.id}
                        className={`seat ${
                          selectedSeats.includes(seat.id) ? "selected" : ""
                        }`}
                        onClick={() => handleSeatClick(seat.id)}
                      ></div>
                    ))}
                  </div>
                </Col>
              </Container>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Booking;
