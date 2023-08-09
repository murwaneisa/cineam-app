import React, { Children } from "react";

function Section({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        paddingLeft: "2%",
        paddingRight: "2%",
      }}
    >
      {children}
    </div>
  );
}

export default Section;
