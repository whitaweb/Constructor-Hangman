// create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
var letter = require("./letter.js");

var wordList = ["Denmark", "Angola", "Tanzania", "New Zealand", "Morocco", "Thailand", "Senegal", "Argentina", "Bolivia"];

var word = function(country) {

    this.country = country;
    this.wordLength = country.length;
    this.wordLetters = [];
    this.guessLeft = 10;
    this.findLetters = function() {
        for (var i = 0; i < country.length; i++) {
            this.wordLetters.push(new letter(this.country[i]));
        }

        return this.wordLetters.letterRender();
    }

    //  Function to choose random country from array.

    this.randomWord = function() {

        var randomNumber = Math.floor(Math.random() * wordList.length);

        var newLetter = new letter;




        

        console.log(randomNumber);
        console.log(word);
        console.log(newWord);


    }


};

var countryWord = new word("Denmark");
countryWord.findLetters();

module.exports = wordList;
module.exports = word;