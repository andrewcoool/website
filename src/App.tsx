import React from 'react';
import './App.css';
import { TermCenterContainer } from './components/TermText/TermContainers';
import { Website } from './components/Website';
import { AllProjects } from './components/AllProjects';
import { allProjects } from './components/websiteData';


function App() {
  return (
    <div className="App">
      <TermCenterContainer text="website">
        <Website />
      </TermCenterContainer>
      {/* <AllProjects projects={allProjects}></AllProjects> */}
    </div>
  );
}

export default App;
