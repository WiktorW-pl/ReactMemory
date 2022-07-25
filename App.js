import React, { useState } from 'react';
import AppLogo from "./components/AppLogo"
import Game from './components/game/Game'

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
      {isEntered && <Game />}
    </div>
  );
}

export default App;
