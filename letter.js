// Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

// Constructor for letter

var letter = function(lett) {
    this.charac = lett;
    this.appear = false;
    
    this.letterRender = function() {
        console.log(this);
        if (this.appear === false) {
            return "_";
        } 
        return this.charac;
        // console.log(letter);
    };

    
};

var letters = new letter("A");
letters.letterRender();

//export the constructor
module.exports = letter;


// Have letter function check to see if user letter is in random word chosen. If not take away one guess. 