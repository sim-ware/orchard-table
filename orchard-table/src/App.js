import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [orchardData, setOrchardData] = useState(0);

  useEffect(() => {
    fetch('https://bx.group/.test/orchards.json')
      .then(response => response.json())
      .then(data => setOrchardData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{JSON.stringify(orchardData)}</p>
      </header>
    </div>
  );
}

export default App;
