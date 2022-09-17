import React from "react";
import "./../style/About.css";
import KUANG_JESSICA from "./../images/KUANG_JESSICA.pdf";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-title">
        <h3>About Me</h3>
      </div>
      <div className="about-info">
        Hello! My name is Jessica Kuang. I am a recent graduate at the
        University of California, Santa Cruz with a Bachelor's in Computer
        Science! I am actively seeking full-time job opportunities in software
        engineering.
      </div>

      <p className="about-info">
        You can reach out to me by email at <b>jkuang10@gmail.com</b> and check
        out my resume <a href={KUANG_JESSICA}>here</a>.
      </p>
    </div>
  );
}
