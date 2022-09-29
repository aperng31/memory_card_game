import React from 'react';

function Scoreboard(props) {
  return (
    <div id="Scoreboard_container">
      <h4>High Score: { props.highScore }</h4>
      <h4> Current Score: { props.currScore }</h4>
    </div>
  );
}

export default Scoreboard;
