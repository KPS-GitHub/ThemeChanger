import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Content from './Layout/Content/Content'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Sidebar from './Layout/Sidebar/Sidebar'
import Themes from '../themes/Themes'

// IMPORTANT NOTE: some of the above imports are not consistent with the case of the folder names (ex: actual folder name: layout; imported folder: Layout)
// -this is because Netlify seems to have a saved version of the folder names that has them all (except pages and themes) as starting with uppercase letter, so you have to use the uppercase version in the imports, regardless of the actual name, or the Netlify build will fail
// -I will look into how to "reset" Netlify's version of the file/folder names, but for now, this is what we have to do

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
              <Content styles={Theme.pageContent} />
              {theme === "Minimal" 
              ? <div style={Theme.pageContent.rightBorderDiv}></div>
              : null}
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