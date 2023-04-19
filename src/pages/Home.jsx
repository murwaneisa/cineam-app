import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import RenderMovies from "../components/RenderMovies";

function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <RenderMovies />
      <Footer />
    </div>
  );
}

export default Home;
