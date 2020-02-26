import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Content from './Layout/Content/Content'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Sidebar from './Layout/Sidebar'
import Hero from './Layout/Content/Hero'
import Slider from './Layout/Content/Slider'
import List from './Layout/Content/List'
import Themes from '../Themes/Themes'

const Wrap = styled.div`
  // .content-col {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  // }
  // .content-col > div {
  //   margin-bottom: 4rem;
  // }
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
            <Col sm={12} md={9} className="content-col" style={Theme.content.container}>  {/* page content column */}
              <Hero />
              <Slider />
              <List />
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