let number = 78;
let userGuess;

do {
  userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

  if (userGuess === number) {
    alert("You guessed it right!");
  } else {
    alert("Wrong guess. Try again.");
  }

} while (userGuess !== 0);
