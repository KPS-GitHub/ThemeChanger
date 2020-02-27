
import React, { useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.li`
  width: 100%;
  button {
    width: 100%;
  }
`

const SidebarItem = ({ theme, styles, updateTheme, currentTheme }) => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => {
    setIsHovered(!isHovered)
  }

  return (
    <Wrap style={isHovered ? {opacity: 0.9} : {opacity: 1}} >
      <button
        style={theme.title === currentTheme ?
          styles && styles.itemButtonActive && styles.itemButtonActive
          : styles && styles.itemButton && styles.itemButton
        }
        onClick={() => updateTheme(theme.title)}
        onMouseEnter={() => toggleHover()}
        onMouseLeave={() => toggleHover()}
      >
        {theme.title}
      </button>
    </Wrap>
  )
}

export default SidebarItem 
