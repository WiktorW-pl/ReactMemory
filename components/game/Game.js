import './Game.css'
import Scores from './Scores.js'
import Card from './Card.js';

function Game() {
  const gameTable = [];
  const createGame = () =>{
    for(let i=0; i<16; i++){
      gameTable.push(<Card key={Math.random()}></Card>)
    }
  }
  return (
    <div className='Game-screen'>
        <Scores></Scores>
        <div className='Cards-container'>
            {createGame()}
            {gameTable}
            {console.log(gameTable)}
        </div>
    </div>
  );
}

export default Game;
