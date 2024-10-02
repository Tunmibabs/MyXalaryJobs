import React from "react";
import { Link } from "react-router-dom";
import DocHeader from "./DocHeader";

function Documents() {
  return (
    <div className="personal-info">
      <DocHeader heading="Documents"/>

      <section className="docs">
        <div>
          <h3>PDF</h3>
          <h5>Ronke-bosola-resume.pdf</h5>
          <Link>View</Link>
        </div>
        <div>
          <h3>PDF</h3>
          <h5>My-portfolio.pdf</h5>
          <Link>View</Link>
        </div>
        <div>
          <h3>PDF</h3>
          <h5>Design-certifcate.pdf</h5>
          <Link>View</Link>
        </div>
      </section>
    </div>
  );
}

export default Documents;
