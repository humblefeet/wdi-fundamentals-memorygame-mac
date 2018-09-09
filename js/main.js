var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You've found a match!");
	}else{
		alert("Sorry, try again.")
	}
};

var flipCard = function(cardId){
	console.log("User has flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2 || cardsInPlay.length ===4){
		checkForMatch();
	};

};


flipCard(0);
flipCard(1);




