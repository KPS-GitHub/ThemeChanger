import React, { useContext } from 'react'
import { DataContext } from '../../DataContext'
import styled from 'styled-components'
 
const Wrap = styled.div`
  // padding-left: 25px;
  // padding-right: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul, li, button {
    width: 100%;
  }
`

const SideBar = ({ styles, updateTheme }) => {
  const themeData = useContext(DataContext).allContentfulThemes.edges[0].node.themesList;

  return (
    <Wrap>
      <h5>Pick a Theme</h5>
      <ul style={styles && styles.list && styles.list}>
        {themeData && 
          themeData.map((theme, i) => {
            return (
              <li key={`theme`+i}>
                <button
                  style={styles && styles.itemButton && styles.itemButton}
                  onClick={() => updateTheme(theme.title)}>
                    {theme.title}
                </button>
              </li>
            )
          })
        }
      </ul>
    </Wrap>
  )
}
 
export default SideBar