// gets the img elements
let playerOneDice = document.querySelector(".img1");
let playerTwoDice = document.querySelector(".img2");

let result = document.querySelector("h1");

// generates random dice number (1-6
diceNoOne = Math.floor((Math.random() * 6) + 1);
diceNoTwo = Math.floor((Math.random() * 6) + 1);

// gets the dice image
let diceOne = "images/dice"+ diceNoOne +".png";
let diceTwo = "images/dice"+ diceNoTwo +".png";

// sets the src to the dice image
playerOneDice.setAttribute("src", diceOne);
playerTwoDice.setAttribute("src", diceTwo);


if (diceNoOne > diceNoTwo) {
	result.textContent = "Player 1 wins!";
} else if (diceNoOne === diceNoTwo) {
	result.textContent = "DRAW!";
} else {
	result.textContent = "Player 2 wins!";
}


