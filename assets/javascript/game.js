// VARIABLES
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var wins = 0;
var losses = 0;
var storeguess = [];
var guessesLeft = 9;

// GAME START
document.onkeyup = function(event) {

    var userGuess = event.key;
    var userGuessLower = userGuess.toLowerCase();

// IF WIN
  if (userGuess.indexOf(userGuessLower)!==-1) {
    if (userGuessLower === computerGuess) {
    wins++;
    guessesLeft = 9;
    storeguess = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  } 
  else{
    guessesLeft--;
  }

// IF LOSE
  if (guessesLeft === 0)  {
      losses++ ;
      guessesLeft = 9;
      storeguess = [];
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }


// SHOWS GUESS IN YOU CHOSE
  storeguess.push(event.key);
}


// PUT THE TEXT ON THE PAGE
  var html =
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>Guess's Left: " + guessesLeft + "</p>" +
"<p>You chose: " + " " + storeguess + "</p>" ;

document.querySelector("#game").innerHTML = html;



    // var resetGuesses = function () {
    //     GuessesLeft = 9; // 
    //     document.querySelector("#Guesses").innerHTML = '';
    //   } 

    // if ((userGuess === computerGuess )) {
        
    //     resetGuesses();} 
    // else if (GuessesLeft == 0) {
    //     guessesLeft--
    //       }    
    // else {
    //     losses++;
    //     resetGuesses();;
    // }
    // if (GuessesLeft === 0) {
        
    // }

      // userChoiceText.textContent = "You chose: " + userGuess;
      // computerChoiceText.textContent = "The computer chose: " + computerGuess;
      // winsText.textContent = "wins: " + wins;
      // lossesText.textContent = "losses: " + losses;


};