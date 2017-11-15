// Game Logic. 
// Initial console describing game.
// Constructor for game logic
// Use inquirer and prompt npm packages


// Require word and letter js.

var Word = require("./word.js");
var Letter = require("./letter.js");
var prompt = require("prompt");
var inquirer = require("inquirer");
var wordList = ["Denmark", "Angola", "Tanzania", "New Zealand", "Morocco", "Thailand", "Senegal", "Argentina", "Bolivia"];




console.log("Welcome to Geography Hangman");
console.log("Category is Countries!");

// Start Function
// Call Word Function
// console Choose Letter
// console Number of Guesses Left
// console underscores representing length of word

// Switch case for choosing correct letter or incorrect letter

var start = function () {

	var that = this;
	this.guessLeft = 10;
	this.randomWord = function() {


        var wordGuess = Math.floor(Math.random() * wordList.length);

        this.newWord = new word(wordList[wordGuess]); 

        that.askLetter();

    }

    this.askLetter = function(){

	inquirer
		.prompt([

        {
            name: "action",
            type: "input",
            message: "Please guess a letter",
         }
        ]).then(function(answer) {
            if (answer.action === that.newWord.wordLetters.charac) {

               

            } else {

                console.log("Thank you for shopping!");
               
            }
}

	// body...
}




