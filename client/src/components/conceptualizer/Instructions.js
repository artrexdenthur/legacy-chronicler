import React from "react";
import { Card } from "react-bootstrap";

export default function Instructions() {
  return (
    <>
      <Card.Title className="bg-light text-center"><h2>How to Use</h2></Card.Title>
      <Card.Body>Go to the Adjectives and Nouns tag to view and add to the respective lists; the button to add more words is at the bottom of each list.</Card.Body>
      <Card.Body>Go to the Concepts tag and click on an Adjective and a Noun to use the Conceptualize button, combining them into a new Concept</Card.Body>
      <Card.Body>Click the "Random Concept" button to generate a concept from your list!</Card.Body>
    </>
  )
}
