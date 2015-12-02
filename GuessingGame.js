/**
 * Created by haileykeen on 11/22/15.
 */

/** Global Variables */

var winningNumber = generateWinningNumber();;


/** Guessing Game Functions */

/**
 * Returns randomly generated number.
 * @returns {Number} what player has to guess to win game.
 */
function generateWinningNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

/**
 * Returns the guess that the player has entered in the input.
 * @returns {Number} the player's guess.
 */
function getPlayerGuess() {
  return $(".guess-input").val();
}

/**
 * Returns a number that signfies how far away the player's guess is from the winning number.
 * If the number is positive the guess is too high.
 * If the number is negative the guess is too low.
 * If the number is zero, the guess is correct.
 * @returns {Number} the difference between the player's guess and the winning number.
 */
function checkGuess() {
  return getPlayerGuess() - winningNumber;
}

/**
 * Sets the text of the tint tooltip.
 */
function setHintText() {
  $(".hint-text").text("The answer is: " + winningNumber);
}

/** Event Handlers */

/**
 * Alerts player after submission whether their guess is too low, too high, or correct.
 */
function handleSubmitButtonClick() {
  var difference = checkGuess();
  if (difference < 0) {
    alert("Your guess is too low");
  } else if (difference > 0) {
    alert("Your number is too high");
  } else {
    alert("You won!");
  }
}

/**
 * Refreshes the page.
 */
function handleStartOverButtonClicked() {
  // Refreshes page.
  window.location.reload();
}


/** DOM Ready Code */

$(function() {
  setHintText();

  $(".submit-button").click(function() {
    handleSubmitButtonClick();
  });

  $(".start-over-button").click(function() {
    handleStartOverButtonClicked();
  });
});
