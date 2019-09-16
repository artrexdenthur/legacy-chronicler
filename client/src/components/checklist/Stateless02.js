import React from "react";
import { Form, Button, Col } from "react-bootstrap";

export default function Stateless02(props) {
  // Stateless submission form for Adjectives and Nouns
  const label =
    "New " + props.type.slice(0, 1).toUpperCase() + props.type.slice(1);
  return (
      <form onSubmit={props.handleOnSubmit}>
        <label className='mx-sm-10'>
          {"New " + props.type.slice(0, 1).toUpperCase() + props.type.slice(1)}
          <input className='mx-10' onChange={props.handleOnInput} type="text" name={props.type} value={props.text} />
        <input className='mx-sm-10' type="submit" value="Submit"/>
        </label>
      </form>
  );
}
