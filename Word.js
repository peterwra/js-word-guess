// Require Letter.js
var ltr = require("./Letter.js");

var Word = function(word) {
    this.letterArray = [];
    for (var i = 0; i < word.length; i++) {
        this.letterArray.push(new ltr.Letter(word[i]));
    }
    this.printWord = function() {
        var printString = "";
        for (var i = 0; i < this.letterArray.length; i++) {
            printString += this.letterArray[i].returnLetter() + " ";
        }
        console.log(printString);
    }
    this.checkLetter = function(letter) {
        
    }
}