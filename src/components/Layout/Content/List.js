import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import styled from 'styled-components'
 
const Wrap = styled.div`
 
`
 
const List = props => {
  const data = useContext(DataContext);
  const items = ["item 1", "item 2", "item 3"];

  return (
    <Wrap>
      <h3>list of things</h3>
      <ul>
        {items ? 
          items.map((item, i) => {
            return(
              <li key={item+i}>{item}</li>
            )
          })
        : <div>sorry, no list items found :(</div>}
      </ul>
    </Wrap>
  )
}
 
export default List