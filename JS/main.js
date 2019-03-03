

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne;
cardOne = cards[0];
cardsInPlay.push(cardOne);

let cardTwo = cards[3];
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2){
  if(cardsInPlay[2] === cardsInPlay[3]){
    window.alert('You found a match!');
  }
  else{
    window.alert('Try again!');
  }
}
console.log("User flipped " + cardsInPlay[1])
