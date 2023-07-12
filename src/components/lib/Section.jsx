import React, { Children } from "react";

function Section({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
    >
      {children}
    </div>
  );
}

export default Section;
