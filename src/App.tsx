import React from 'react';
import './App.css';
import { HighlightedProject } from './components/HighlightedProject';

function App() {
  return (
    <div className="App">
      <HighlightedProject
        title="Collaborate Code"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris ex, quis vestibulum mi eleifend ac. Sed quis diam varius, tempus eros et, suscipit enim. "
        technologies={["Python", "Flask", "HTML", "CSS", "JS"]}
        clickUrl="http://google.ca"
        imgUrl="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
      ></HighlightedProject>
    </div>
  );
}

export default App;
