import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Layout/Header'
import Sidebar from './Layout/Sidebar'
import Hero from './Layout/Content/Hero'
import Themes from '../themes/Themes'

const Wrap = styled.div`

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
            <Col sm={12} md={9}>
              <Hero />
            </Col>
          </Row>
        </Container>        
        {children}
      </Container>      
    </Wrap>
  )
}
 
export default Page