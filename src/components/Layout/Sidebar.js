import React, { useContext } from 'react'
import { DataContext } from '../../DataContext'
import styled from 'styled-components'
 
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const SideBar = () => {
  const data = useContext(DataContext)
  return (
    <Wrap>sidebar</Wrap>
  )
}
 
export default SideBar