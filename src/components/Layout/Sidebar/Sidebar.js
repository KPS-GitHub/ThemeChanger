import React, { useContext } from 'react'
import { DataContext } from '../../../DataContext'
import styled from 'styled-components'
import SidebarItem from './SidebarItem'
 
const Wrap = styled.div`
  // padding-left: 25px;
  // padding-right: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    width: 100%;
  }
`

const SideBar = ({ styles, updateTheme, currentTheme }) => {
  const themeData = useContext(DataContext).allContentfulThemes.edges[0].node.themesList;

  return (
    <Wrap>
      <h5>Pick a Theme</h5>
      <p>current theme: {currentTheme}</p>
      <ul style={styles && styles.list && styles.list}>
        {themeData && 
          themeData.map((theme, i) => {
            return (
              <SidebarItem theme={theme} styles={styles} updateTheme={updateTheme} currentTheme={currentTheme} />
            )
          })
        }
      </ul>
    </Wrap>
  )
}
 
export default SideBar