import React from "react";

function ListDescription({ heading, company, items }) {
  return (
    <article className="descrption-list">
      <div>
        <h4>{heading}</h4>
        <p>{company}</p>
      </div>

      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default ListDescription;
