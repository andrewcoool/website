import React from 'react';
import './App.css';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact github={{name: "@andrewcoool", url: "https://github.com/andrewcoool"}}
      email="andrewq.qiu@mail.utoronto.ca" />
    </div>
  );
}

export default App;
