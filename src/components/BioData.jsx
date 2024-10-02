import React from "react";
import Infoheader from "./Infoheader";

function BioData() {
  return (
    <div className="Biodata">
      <Infoheader heading="Biodata Information" />

      <section>
        <div>
          <h5>Phone:</h5>
          <p>0812345678</p>
        </div>

        <div>
          <h5>Email:</h5>
          <p>ronkeBosola@gmail.com</p>
        </div>

        <div>
          <h5>Birthday:</h5>
          <p>24th, june 1990</p>
        </div>

        <div>
          <h5>Address:</h5>
          <p>16, Sunday Monday Ave, Ikeja Lagos, Nigeria.</p>
        </div>
        <div>
          <h5>Gender:</h5>
          <p>Female</p>
        </div>
        <div>
          <h5>Location:</h5>
          <p>Gbagada Lagos NGA</p>
        </div>
      </section>
    </div>
  );
}

export default BioData;
