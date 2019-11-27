import React from "react";
import { Card } from "react-bootstrap";

export default function About(props) {
  // About
  return (
    <>
      <Card.Title className="text-center bg-light">
        <h2>About</h2>
      </Card.Title>
      <Card.Body>
        <div>
          Welcome to The Inaccurate Conception! This is a little doohickey that
          allows you to add nouns and adjectives to their respective lists, and
          then combine them into noun/adjective concepts. Give it a try!
        </div>
      </Card.Body>
    </>
  );
}
