import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar.js';

function App() {
  const [completed, setCompeted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompeted(Math.floor(Math.random() * 100) + 1), 1000); 
  }, [])

  return (
    <div className="App">
       <ProgressBar bgcolor={"#6a1b9a"} completed={completed}></ProgressBar>
    </div>
  );
}

export default App;
