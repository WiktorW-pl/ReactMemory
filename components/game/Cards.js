import './Cards.css'
import Scores from './Scores.js'

function Cards() {
  return (
    <div className='Game-screen'>
        <Scores></Scores>
        <div className='Cards-container'>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
            <div className='Card'></div>
        </div>
    </div>
  );
}

export default Cards;
