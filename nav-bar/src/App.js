import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';

function App() {
  const [mood, setMood] = useState(false);

  return (
    <div className={`App min-h-screen ${mood ? 'bg-slate-900 text-white' : 'bg-white'} `}>

      <Nav mood={mood} setMood={setMood}></Nav>
    </div>
  );
}

export default App;
