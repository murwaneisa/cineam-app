import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  // Access the dynamic route parameter
  const { id } = useParams();

  console.log("the id ", id);
  return <div>MovieDetails</div>;
}

export default MovieDetails;
