import React, { useContext } from 'react'
import { DataContext } from '../../DataContext'
import styled from 'styled-components'
 
const Wrap = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul, li, button {
    width: 100%;
  }
`

const SideBar = ({ styles, updateTheme }) => {
  const data = useContext(DataContext);
  // console.log("sidebar data: ", data);
  // console.log("sidebar styles: ", styles);

  // dummy theme data - still need to populate contentful and hook it up
  const fakeThemeData = ["Minimal", "InDevelopment"];
  return (
    <Wrap>
      <h5>Pick a Theme</h5>
      <ul style={styles.list}>
        {fakeThemeData && 
          fakeThemeData.map((theme, i) => {
            return (
              <li key={`theme`+i}>
                <button
                  style={styles.itemButton}
                  onClick={() => updateTheme(theme)}>
                    {theme}
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