var cards = [
	{
		rank : "queen",
		suit : "hearts",
		cardImage : "images/queen-of-hearts.png"
	},
	{
		rank : "queen",
		suit : "diamonds",
		cardImage : "images/queen-of-diamonds.png"
	},
	{
		rank : "king",
		suit : "hearts",
		cardImage : "images/king-of-hearts.png"
	},
	{
		rank : "king",
		suit : "diamonds",
		cardImage : "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You've found a match!");
	}else{
		alert("Sorry, try again.")
	}
};

var flipCard = function(){
	var cardId = this.getAttribute('data-Id');
	cardsInPlay.push(cards[cardId].rank);

	console.log("User has flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2 || cardsInPlay.length ===4){
		checkForMatch();
	};

};


var createBoard = function(){
	for(var i = 0; i < cards.length; i ++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-Id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('board-game').appendChild(cardElement);
	};
};

createBoard();



