import React from "react";
import { Button, Container, Stack, Badge } from "react-bootstrap";
import "../style/hero.css";

function HeroSection() {
  return (
    <header className="masthead">
      <div className="container h-100 text-left">
        <div className="row h-100 align-items-end ">
          <div className="col-12 mb-4">
            <h1 className="fw-light">Black Panther</h1>
            <span className="date">2h 14m | 2018</span>
            <p className="lead w-50 ">
              T'Challa, heir to the hidden but advanced kingdom of Wakanda, must
              step forward to lead his people into a new future and must
              confront a challenger from his country's past.
            </p>
            <p>
              Director: <span class="director">Ryan Coogler</span>
            </p>

            <Stack direction="horizontal" gap={3}>
              <Button className="btn-hero" variant="primary">
                Get Ticket
              </Button>
              <Button className="btn-hero" variant="secondary">
                Watch Trailer
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
