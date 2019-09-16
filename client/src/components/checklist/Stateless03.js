import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Concept(props){
  // Handles Adjective/Noun selection for Concept creation
  const options = props.handleSelect ?
    {
      action: true,
      active: props.selected === props.concept.id,
      onClick: () => props.handleSelect(props.concept.id)
    } :
    {}

  return(
    <ListGroup.Item {...options}>
      {props.concept.name}
    </ListGroup.Item>
  )
}