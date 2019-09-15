import React from "react";

export default function Stateless01(props) {
  console.log(props);
  return (
    <>
      <h4>Adjectives</h4>
      <ul>
        {props.adjectives.map(a => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
    </>
  );
}
