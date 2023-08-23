import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import RenderMovies from "../components/RenderMovies";
import Section from "../components/lib/Section";
import "../style/home.css";
import { Button, Container, Image } from "react-bootstrap";

function Home() {
  return (
    <div>
      <HeroSection />
      <Section>
        <RenderMovies />
      </Section>
      <Section>
        <div style={{ paddingTop: "3rem" }}>
          <div className="image-section">
            <Image
              src="https://www.popoptiq.com/wp-content/uploads/2022/04/eating-popcorn-04282022.jpg"
              alt="Popcorn"
              fluid
              className="popcorn-image"
            />
            <div className="overlay">
              <Container>
                <h3>Buy One Large Popcorn + One Large Pepsi </h3>
                <Button className="btn btn-outline-light btn-movie-card bg-dark">
                  Up To 20% OFF
                </Button>
              </Container>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Home;
