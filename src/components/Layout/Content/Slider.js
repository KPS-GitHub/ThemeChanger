import React, { useState, useContext, useRef, useEffect } from 'react'
import Img from 'gatsby-image'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { DataContext } from '../../../DataContext'
 
const Wrap = styled.div`
  width: 100%;
  .slider-row {
    flex-wrap: nowrap;
  }
  .slide-window {
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
  }
  .slides-container {
    position: relative;
  }
  .slides-row {
    position: absolute;
    // z-index: -10;
    // left: 0;
    top: 0;
    flex-direction: row;
    flex-wrap: nowrap;
    transition: transform 0.5s ease;
  }
`

const Slider = props => {
  const slides = useContext(DataContext).allContentfulSlider.edges[0].node.slides;

  // ============== sizing for layout, responsiveness, and slide row positioning to show correct slide ============== //
  const slideRef = useRef();
  const [slideWidth, setSlideWidth] = useState(0);
  const [slideHeight, setSlideHeight] = useState(0);
  
  const onResize = () => {
    setSlideWidth(slideRef.current.offsetWidth)
    setSlideHeight(slideRef.current.offsetHeight)
  }

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize)
    return (
      window.removeEventListener("resize", onResize)
    )
  })

  // =============== tracking current index so that the slider can position the correct slide in view (style prop on line 79) ============= //
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (index, prevNext) => {
    return (
      prevNext === "prev" ?
        index > 0 ? 
          setCurrentIndex(index - 1)
        :  null
      : index < (slides.length - 1) ?
          setCurrentIndex(index + 1)
        : null
    )
  }

  return (
    <Wrap >
      <Container fluid>
        <Row className="slider-row">
          <Col sm={2}>
            {currentIndex > 0 ?
              <button onClick={() => changeSlide(currentIndex, "prev")}>{'<'}</button>
            : null}
          </Col>
          <Col sm={8} className="slide-window"  style={{height: slideHeight + `px`}}>
            <Container fluid className="slides-container">
              <Row className="slides-row" style={{transform: `translateX(`+ (currentIndex * (-slideWidth)) + `px)`}}>
                {slides && 
                  slides.map((slide, i) => {
                    return (
                      <Col sm={12} key={`slide`+i} ref={slideRef}>
                        <h5>{slide.title}</h5>
                        <Img fluid={slide.image.fluid} alt={slide.image.title} />
                        <p>{slide.copy.copy}</p>
                      </Col>
                    )
                  })}
              </Row>
            </Container>
          </Col>
          <Col sm={2}>
            {currentIndex < slides.length - 1 ?
              <button onClick={() => changeSlide(currentIndex, "next")}>{'>'}</button>
            : null}
          </Col>
        </Row>
      </Container>
    </Wrap>
  )
}
 
export default Slider