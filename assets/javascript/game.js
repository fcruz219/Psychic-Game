var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var guess = 9

    var resetGuesses = function () {
        GuessesLeft = 9; // 
        document.querySelector("#Guesses").innerHTML = '';
      }

    if ((userGuess === computerGuess )) {
        wins++;
        resetGuesses();} 
    else if (GuessesLeft == 0) {
        losses++;
        resetGuesses();
          }    
    else {
        losses++;
        guessesLeft--;
    }
    if (GuessesLeft === 0) {
        
    }

      userChoiceText.textContent = "You chose: " + userGuess;
      computerChoiceText.textContent = "The computer chose: " + computerGuess;
      winsText.textContent = "wins: " + wins;
      lossesText.textContent = "losses: " + losses;
};