import React from 'react';
import Deck from './Deck';

function Controller(props) {
  const [clicked, setClicked] = React.useState([]);


  React.useEffect( () => {
    const lastClick = clicked[clicked.length - 1];
    const clickedSlice = clicked.slice(0, clicked.length - 1);
    if (clickedSlice.includes(lastClick)) {
      console.log('lose')
      props.gameReset();
      setClicked([]);
    }

  }, [clicked]);

  const checkClick = (newCardKey) => {
    setClicked((prev) => [...prev, newCardKey]);
    props.changeScore();

  }

    // if (!clicked.includes(newCardKey)) { //continue playing
    //   setClicked((prev) => [...prev, newCardKey]);
    //   props.changeScore();
    // }
    // else { //game reset
    //   props.gameReset();
    //   setClicked([]);
    //   console.log('lose!')
    //   //check current game score if higher than highest
    //     //if so, store high, if not, do nothing
    //   //reset game score
    //   //empty clicked array
    //   //show alert of lose?
    // }
    //shuffle deck (child)

  //useEffect that calls shuffle when clicked changes?
  return (
    <div id="Controller_container">
      <Deck checkClick={ checkClick } />
    </div>
  );
}

export default Controller;
