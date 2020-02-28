import React, { useContext } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { DataContext } from '../../../DataContext'
 
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  h1 {
    margin: 1rem 0;
  }
  .pic-and-copy {
    display: flex;
    align-items: flex-start;
  }
  .pic {
    width: 20%;
    margin-right: 1rem;
  }
  .copy {
    width: 80%;
  }
`
 
const Hero = ({ styles }) => {
  const heroData = useContext(DataContext).allContentfulHero.edges[0].node

  return (
    <Wrap>
      <h1>{heroData.siteTitle}</h1>
      <div className="pic-and-copy" style={styles.picAndCopy}>
        <div className="pic"><Img fluid={heroData.image.fluid} alt={`alt`} style={styles.image} /></div>
        <div className="copy">{heroData.copy.copy}</div>
      </div>
    </Wrap>
  )
}
 
export default Hero