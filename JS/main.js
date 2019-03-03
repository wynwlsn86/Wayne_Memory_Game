

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne;

function checkForMatch () {
  if(cardsInPlay.length === 2){
    if(cardsInPlay[0] === cardsInPlay[1]){
      window.alert("You found a match!");
    }
    else{
      window.alert("Try again!");
    }
  }
}

function flipCard (cardId){
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
};


flipCard(0);
flipCard(2);
