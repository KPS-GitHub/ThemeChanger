import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import List from './List'
import Slider from './Slider'

const Wrap = styled.div`
 > div {
    margin-bottom: 4rem; 
 }
`

const Content = ({ styles }) => { 
  return (
    <Wrap>
      <Hero styles={styles.hero} />
      <Slider styles={styles.slider} />
      <List styles={styles.list} />
    </Wrap>
  )
}

export default Content 
