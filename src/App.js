import './App.css';
import React from 'react';
import Controller from './Controller.js'
import Scoreboard from './Scoreboard';

function App() {
  const [currScore, updateCurr] = React.useState(0);
  const [highScore, updateHigh] = React.useState(0);

  const changeScore = () => {
    updateCurr((prevScore) => prevScore + 1);
  }
  const gameReset = () => {
    if (currScore > highScore) {
      updateHigh(currScore - 1);
    }
    updateCurr(0);
  }

  return (
    <div className="App">
      <div id="App_header">
        <h2>Memory Card Game</h2>
        <Scoreboard currScore={currScore} highScore={highScore}/>
      </div>
      <div id="App_container">
        <Controller changeScore={ changeScore } gameReset={ gameReset }/>

      </div>
    </div>
  );
}

export default App;
