import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ExpandRowModule = props => {
  return (
    <Row className='justify-content-md-center'>
      <strong>Heading</strong>
      <Col md="auto">
        <strong>Data 1:</strong> Data 1 val
      </Col>
      <Col md="auto">
        <strong>Data 2:</strong> Data 2 val
      </Col>
    </Row>
  )
}

export default ExpandRowModule