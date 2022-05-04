import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TermText } from './components/TermText/TermText';
import { P } from './design-system/text';
import { Timeline } from './components/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Timeline></Timeline>
    </div>
  );
}

export default App;
