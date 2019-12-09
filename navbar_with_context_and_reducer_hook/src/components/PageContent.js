import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext"

export default function PageContent(props) {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext)
  const styles = {
    backgroundColor: isDarkMode? "black":"white",
    height: '100vh',
    width: '100vw'
  }
  console.log(props.children)
  return (
    <div style={styles}>{props.children}</div>
  )
}