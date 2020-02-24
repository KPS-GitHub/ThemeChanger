import React, { useState, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { DataContext } from '../../../DataContext'
 
const Wrap = styled.div`
  .slider-row {
    display: flex;
    flex-wrap: nowrap;
  }
`

const Slider = props => {
  const data = useContext(DataContext);
  const [index, setIndex] = useState(0);
  
  return (
    <Wrap>
      <Container fluid>
        <Row className="slider-row">
          <Col sm={2}>
            {'<'}
          </Col>
          <Col sm={8} className="slide-window">
            slides
          </Col>
          <Col sm={2}>
            {'>'}
          </Col>
        </Row>
      </Container>
    </Wrap>
  )
}
 
export default Slider