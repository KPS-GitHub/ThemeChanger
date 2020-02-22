import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import styled from 'styled-components'
 
const Wrap = styled.div`
  .pic-and-copy {
    display: flex;
    align-items: center;
  }
  .pic {
    width: 20%;
  }
  .copy {
    width: 80%;
  }
`
 
const Hero = () => {
  const data = useContext(DataContext)
  return (
    <Wrap>
      <div>title</div>
      <div className="pic-and-copy">
        <div className="pic">pic</div>
        <div className="copy">copy</div>
      </div>
    </Wrap>
  )
}
 
export default Hero