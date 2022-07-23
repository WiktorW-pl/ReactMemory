import React, { useState } from 'react';
import AppLogo from "./components/AppLogo"
import Cards from './components/game/Cards'

import './App.css'

function App() {

  const [isEntered, setIsEntered] = useState(false);

  const enterTheGame = () =>{
    setIsEntered(true);
  }

  return (
    <div className='App'>
      {!isEntered && <AppLogo />}
      {!isEntered && <button onClick={enterTheGame} className='App-Logo__btn'>Start new game</button>}
      {isEntered && <Cards />}
    </div>
  );
}

export default App;
