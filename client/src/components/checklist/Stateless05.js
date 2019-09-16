import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { withRouter, Route } from 'react-router-dom'
import Concept from './Stateless03'

export default function Concepts(props) {
  // Spawns indexes for any kind of Concept
  return (
    <>
      <Card.Title className="text-center bg-light" >
        <h4>{props.type.slice(0, 1).toUpperCase() + props.type.slice(1) + 's'}</h4> 
        {/* The name of the concept type, uppercase and plural */}
      </Card.Title>
      <Card.Body>
        <ListGroup>
          {props.concepts.map(c => {
            return (
              <Concept 
                key={c.id} 
                concept={c} 
                selected={props.selected}
                handleSelect={props.handleSelect} />
            )
          })}
        </ListGroup>
        {props.toggleButton ? props.toggleButton() : null}

      </Card.Body>
    </>
  )
}