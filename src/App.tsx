import './App.css';
import { TermCenterContainer } from './components/TermText/TermContainers';
import { Website } from './components/Website';

function App() {
  return (
    <div className="App">
      <TermCenterContainer text="website">
        <Website />
      </TermCenterContainer>
    </div>
  );
}

export default App;
