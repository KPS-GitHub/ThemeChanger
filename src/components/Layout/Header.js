import React, { useContext } from 'react'
import { DataContext } from '../../DataContext'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  div {
    padding: 1rem 1rem 1rem 0;
  }
`
 
const Header = () => {
  const data = useContext(DataContext)
  const person = data.allContentfulPerson.edges[0].node;
  return (
    <Wrap className="header-wrap">
      <div>{person.name}</div>
      <div>social links</div>
    </Wrap>
  )
}
 
export default Header