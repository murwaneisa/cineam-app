import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import RenderMovies from "../components/RenderMovies";
import Section from "../components/lib/Section";

function Home() {
  return (
    <div>
      <HeroSection />
      <Section>
        <RenderMovies />
      </Section>
    </div>
  );
}

export default Home;
