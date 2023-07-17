import React from "react";
import { ProgressBar, Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className="d-flex justify-content-center bg-dark align-items-center vh-100">
      <Spinner animation="border" variant="light" role="status">
        <span style={{ color: "white" }} className="visually-hidden">
          Loading...
        </span>
      </Spinner>
    </div>
  );
}

export default Loading;
