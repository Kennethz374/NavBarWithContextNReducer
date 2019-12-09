import React from 'react';
import Navigation from "./components/Navigation"
import Form from "./components/Form"
import PageContent from "./components/PageContent"
import ThemeProvider from "./contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navigation/>
        <Form />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
