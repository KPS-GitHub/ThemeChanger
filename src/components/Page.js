import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Content from './layout/content/Content'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Sidebar from './layout/sidebar/Sidebar'
import Themes from '../themes/Themes'

const Wrap = styled.div`
  * {
    transition: all 0.25s ease;
  }
`


const Page = ({ children }) => {
  // console.log("contextData: ", data);

  const [theme, setTheme] = useState('Minimal');
  const updateTheme = (thm) => {
    setTheme(thm)
    // console.log(" current theme: ", thm)
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
            <Col sm={12} md={9} className="content-col" style={Theme.pageContent.container}>  {/* page content column */}
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