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

function Booking() {
  const { id } = useParams();
  const movies = useSelector((state) => state.data);
  const movieInfo = movies.movies.find((movie) => movie.id == id);

  if (!movieInfo || Object.keys(movieInfo).length === 0) {
    return <Loading />; //looding status until the the useSelector hook get the data
  }
  const auditorium = movies.data.find((audi) => audi.movieId == id);
  console.log("first", auditorium);

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
                  <Button variant="link" className="increment-button">
                    <AiOutlineMinus color="#ffffff" />
                  </Button>
                  <span className="selected-number">2</span>
                  <Button variant="link" className="increment-button">
                    <AiOutlinePlus color="#ffffff" />
                  </Button>
                </Col>
              </Stack>
              <Stack direction="horizontal">
                <Col className="ticket-type">
                  Senior
                  <p className="ticket-price-line">
                    1 st Senior ( + 65 ) is 75 kr{" "}
                  </p>{" "}
                </Col>
                <Col className="d-flex align-items-center">
                  <Button variant="link" className="increment-button">
                    <AiOutlineMinus color="#ffffff" />
                  </Button>
                  <span className="selected-number">10</span>
                  <Button variant="link" className="increment-button">
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
                  <Button variant="link" className="increment-button">
                    <AiOutlineMinus color="#ffffff" />
                  </Button>
                  <span className="selected-number">3</span>
                  <Button variant="link" className="increment-button">
                    <AiOutlinePlus color="#ffffff" />
                  </Button>
                </Col>
              </Stack>
            </Stack>
          </Col>
          <Col>
            <div style={{ color: "red" }}>
              In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/)
              is a placeholder text commonly used to demonstrate the visual form
              of a document or a typeface without relying on meaningful content.
              Lorem ipsum may be used as a placeholder before final copy is
              available. It is also used to temporarily replace text in a
              process called greeking, which allows designers to consider the
              form of a webpage or publication, without the meaning of the text
              influencing the design. Lorem ipsum is typically a corrupted
              version of De finibus bonorum et malorum, a 1st-century BC text by
              the Roman statesman and philosopher Cicero, with words altered,
              added, and removed to make it nonsensical and improper Latin. The
              first two words themselves are a truncation of 'dolorem ipsum'
              ('pain itself'). Versions of the Lorem ipsum text have been used
              in typesetting at least since the 1960s, when it was popularized
              by advertisements for Letraset transfer sheets.[1] Lorem ipsum was
              introduced to the digital world in the mid-1980s, when Aldus
              employed it in graphic and word-processing templates for its
              desktop publishing program PageMaker. Other popular word
              processors, including Pages and Microsoft Word, have since adopted
              Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content
              managers such as Joomla! and WordPress, and CSS libraries such as
              Semantic UI.[6]
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Booking;
