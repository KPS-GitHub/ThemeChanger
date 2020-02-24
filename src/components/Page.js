import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Sidebar from './Layout/Sidebar'
import Content from './Layout/Content/Content'
import Themes from '../Themes/Themes'

const Wrap = styled.div`

`


const Page = ({ children }) => {
  // console.log("contextData: ", data);

  const [theme, setTheme] = useState('Minimal');
  const updateTheme = (thm) => {
    setTheme(thm)
  }

  const Theme = Themes[theme];

  return (
    <Wrap style={Theme.window}>
      <Container fluid style={Theme.header.container}>
        <Container>
          <Row>
            <Col>
              <Header />  
            </Col>
          </Row>
        </Container>    
      </Container>
      <Container fluid style={Theme.main}>
        <Container>
          <Row>
            <Col sm={12} md={3}  style={Theme.sidebar.container}>
              <Sidebar styles={Theme.sidebar.content && Theme.sidebar.content} updateTheme={updateTheme} currentTheme={theme} />
            </Col>  
            <Col sm={12} md={9} style={Theme.content.container}>  {/* page content column */}
              <Content />
            </Col>
          </Row>
        </Container>        
      </Container>     
      <Container fluid style={Theme.footer.container}>
        <Container>
          <Row>
            <Col>
              <Footer />  
            </Col>
          </Row>
        </Container>    
      </Container> 
    </Wrap>
  )
}
 
export default Page