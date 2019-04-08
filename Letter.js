// Constructor for the letter object
var Letter = function (letter) {
    this.letter = letter;
    this.isFound = false;

    // Return the letter or an underscore
    this.returnLetter = function () {
        if (this.isFound) {
            return this.letter;
        } else {
            return "_";
        }
    }

    // Check to see if the user correctly guesses a letter
    this.checkLetter = function (letter) {
        if (!this.isFound && (this.letter.toLowerCase() == letter.toLowerCase())) {
            this.isFound = true;
        }
        return this.isFound;
    }
}