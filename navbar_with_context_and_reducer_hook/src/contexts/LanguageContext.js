import React, {createContext,useState} from 'react';

export const LanguageContext = createContext();

export default function LanguageProvider (props) {
  const [language, setLanguage] = useState("Chinese")
  const selectLanguage= (e) => {
    setLanguage(e.target.value)
  }
  return (
    <LanguageContext.Provider value={{language, selectLanguage:selectLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  )
}