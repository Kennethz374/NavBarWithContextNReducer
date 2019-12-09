import React, {createContext, useState} from 'react'

//create a context and every context has a provider
export const ThemeContext = createContext();

export default function ThemeProvider (props) {
  const [isDarkMode, setDarkMode] = useState(false)
  const toggleTheme= () => {
    setDarkMode(!isDarkMode)
  }
  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme:toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}