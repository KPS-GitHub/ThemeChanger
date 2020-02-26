import React, { useContext, useState } from 'react'
import { DataContext } from '../../../DataContext'
import styled from 'styled-components'
import SidebarItem from './SidebarItem'
 
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

const SideBar = ({ styles, updateTheme, currentTheme }) => {
  const themeData = useContext(DataContext).allContentfulThemes.edges[0].node.themesList;

  console.log("styles: ", styles)

  // console.log("currentTheme: ", currentTheme)

  return (
    <Wrap>
      <h5>Pick a Theme</h5>
      <p>current theme: {currentTheme}</p>
      <ul style={styles && styles.list && styles.list}>
        {themeData && 
          themeData.map((theme, i) => {
            console.log("theme.title: ", theme.title);
            console.log("currentTheme: ", currentTheme);
            console.log(" === ? ", theme.title === currentTheme)
            return (
              <SidebarItem theme={theme} styles={styles} updateTheme={updateTheme} currentTheme={currentTheme} />
              // <li key={`theme`+i}>
              //   <button key={`themeButton`+i}
              //     style={theme.title === currentTheme 
              //       ? styles && styles.itemButtonActive && styles.itemButtonActive
              //       : styles && styles.itemButton && styles.itemButton}
              //     onClick={() => updateTheme(theme.title)}>
              //       {theme.title}
              //   </button>
              // </li>
            )
          })
        }
      </ul>
    </Wrap>
  )
}
 
export default SideBar