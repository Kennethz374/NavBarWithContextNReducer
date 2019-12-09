import React from 'react';
import Navigation from "./components/Navigation"
import Form from "./components/Form"
import PageContent from "./components/PageContent"
import ThemeProvider from "./contexts/ThemeContext"
import LanguageProvider from "./contexts/LanguageContext"

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageProvider>
          <Navigation/>
          <Form />
        </LanguageProvider>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
