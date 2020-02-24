import React from 'react'
import styled from 'styled-components'
 
const Wrap = styled.div`
 display: flex;
 justify-content: center;
 padding: 1rem 0;
`
 
const Footer = props => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Wrap>
      © {year}
    </Wrap>
  )
}
 
export default Footer