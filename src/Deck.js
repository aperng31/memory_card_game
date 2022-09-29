import './App.css';
import React from 'react';
import './Card.css'

function Deck(props) {

  function Card(name, imgSrc, key) {
    const myKey = key;
    return (
      <div className='card' onClick={ () => { handleClick(myKey) } }>
        <img className='card_img' alt="img"></img>
        <h2 className='card_name'> { name }</h2>
      </div>
    )
  }

  const initDeck = [];
  for(let i = 0; i < 8; i++) {
    initDeck[i] = new Card(i, 'hi', i);
  }
  React.useEffect(() => {

    //console.log('useeffect mount'); 
    //loop through 
  }); //empty array means runs only when component mounts

  const [Deck, updateDeck] = React.useState(initDeck);

  const handleClick = (myKey) => {
    props.checkClick(myKey);
    shuffle();
  }

  const shuffle = () => {
    let tempDeck = [...initDeck];
    let newDeck = [];
    for(let i = 1; i < 9; i++) {
      const randomNum = Math.floor((Math.random() * (9 - i))); //find number b/w 0 - 7
      newDeck.push(tempDeck[randomNum]); //push card at ordered tempDeck to newDeck
      tempDeck.splice(randomNum, 1); //remove card at randomNum
    }
    updateDeck(newDeck);
    //use map? and random fn between using index at each ele
  }

  return (
    <div id="Deck_container">
      {/* { Deck.map((elem) => <Card elem={ elem }/>) }  */}
      { Deck }
    </div>
  );
}
//no need to re-create cards every shuffle? just create initial deck and shuffle contents within?
export default Deck;
