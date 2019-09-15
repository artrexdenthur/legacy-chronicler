import React from "react";

export default function Stateless02(props) {
  return (
    <>
      <h4>Nouns</h4>
      <ul>
        {props.nouns.map(m => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
    </>
  );
}
