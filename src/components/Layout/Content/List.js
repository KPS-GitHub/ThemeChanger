import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import styled from 'styled-components'
 
const Wrap = styled.div`
 
`
 
const List = props => {
  const listData = useContext(DataContext).allContentfulList.edges[0].node;

  return (
    <Wrap>
      <h3>{listData.title}</h3>
      <ul>
        {listData && listData.items ? 
          listData.items.map((item, i) => {
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