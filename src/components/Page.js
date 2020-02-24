import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Layout/Header'
import Sidebar from './Layout/Sidebar'
import Hero from './Layout/Content/Hero'
import Slider from './Layout/Content/Slider'
import List from './Layout/Content/List'
import Themes from '../themes/Themes'

const Wrap = styled.div`
  .content-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content-col > div {
    margin-bottom: 4rem;
  }
`


const Page = ({ children }) => {
  // console.log("contextData: ", data);

  const [theme, setTheme] = useState('InDev');

  const Theme = Themes[theme];

  return (
    <Wrap>
      <Container fluid style={Theme.header.container}>
        <Container>
          <Row>
            <Col>
              <Header />  
            </Col>
          </Row>
        </Container>    
      </Container>
      <Container fluid>
        <Container>
          <Row>
            <Col sm={12} md={3}  style={Theme.sidebar.container}>
              <Sidebar />
            </Col>  
            <Col sm={12} md={9} className="content-col">  {/* page content column */}
              <Hero />
              <Slider />
              <List />
            </Col>
          </Row>
        </Container>        
      </Container>      
    </Wrap>
  )
}
 
export default Page