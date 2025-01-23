import React from "react";

function Section({ id, isActive, title, children }) {
  return (
    <section
      id={id}
      className={`section ${isActive ? "active" : ""}`}
    >
      <h2>{title}</h2>
      {children} {/* Render content passed as children */}
    </section>
  );
}

export default Section;
