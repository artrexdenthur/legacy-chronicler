import React from 'react'
import { Form } from 'react-bootstrap'

export default function SpoilerBar(props) {
  return (
    <Form>
      <Form.Check inline label="1" type="checkbox" />
      <Form.Check inline label="2" type="checkbox" />
      <Form.Check inline label="3" className='invisible' type="checkbox" />
      {/* {props.spoilers.map(s => {
        <Spoiler spoiler={s} />
      })} */}

    </Form>
  )
}

const Spoiler = props => {
  <Form.Check 
    inline 
    label={props.name} 
    classname={props.show ? 'visible' : 'invisible'}
    />
}