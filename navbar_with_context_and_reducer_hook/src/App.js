import React from 'react';
import Navigation from "./components/Navigation"
import Form from "./components/Form"
import PageContent from "./components/PageContent"

function App() {
  return (
    <PageContent>
      <Navigation/>
      <Form />
    </PageContent>
  );
}

export default App;
