import React from "react";
import Infoheader from "./Infoheader";

function Competencies() {
  return (
    <div className="personal-info">
      <Infoheader heading="Competencies and Tools" />

      <section className="compt">
        <article>
          <h5>Competencies</h5>
          <div>
            <span>Illustrator</span>
            <span>Photoshop</span>
            <span>Figma</span>
            <span>Adobe illustrator</span>
            <span>Sketch</span>
          </div>
        </article>

        <article>
          <h5>Tools</h5>
          <div>
            <span>Illustrator</span>
            <span>Photoshop</span>
            <span>Figma</span>
            <span>Adobe illustrator</span>
            <span>Sketch</span>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Competencies;
