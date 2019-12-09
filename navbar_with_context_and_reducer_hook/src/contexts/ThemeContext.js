import React, {createContext, useState} from 'react'

//create a context and every context has a provider
export const ThemeContext = createContext();

export default function ThemeProvider (props) {
  const [isDarkMode, setDarkMode] = useState(true)
  return (
    <ThemeContext.Provider value={{isDarkMode, tasteLikeChicken:true}}>
      {props.children}
    </ThemeContext.Provider>
  )
}