/**
 * Created by haileykeen on 11/22/15.
 */

/** Global Variables */

var winningNumber = generateWinningNumber();;
var turnCounter = 0;


/** Guessing Game Functions */

/**
 * Returns randomly generated number.
 * @returns {number} what player has to guess to win game.
 */
function generateWinningNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

/**
 * Returns the guess that the player has entered in the input.
 * @returns {number} the player's guess.
 */
function getPlayerGuess() {
  return $('.guess-input').val();
}

/**
 * Returns a number that signfies how far away the player's guess is from the winning number.
 * If the number is positive the guess is too high.
 * If the number is negative the guess is too low.
 * If the number is zero, the guess is correct.
 * @returns {number} the difference between the player's guess and the winning number.
 */
function checkGuess() {
  return getPlayerGuess() - winningNumber;
}

/**
 * Sets the text of the tint tooltip.
 */
function setHintText() {
  $('.hint-text').text('The answer is: ' + winningNumber);
}

/** Event Handlers */

function validateSubmission() {
  var val = parseInt($('.guess-input').val());
  return typeof val === 'number' && 1 <= val && val <= 100;
}

/**
 * Alerts player after submission whether their guess is too low, too high, or correct.
 */
function handlePlayerInput() {
  useTurn();
  
  var difference = checkGuess();
  var message = "";
  if (difference < 0) {
    message += 'Your guess is too low.';
  } else if (difference > 0) {
    message += 'Your number is too high.';
  } else {
    message += 'You won!';
  }

  var absDifference = Math.abs(difference);
  if (absDifference > 0) {
    if (absDifference <= 5) {
      message += " You are hot!";
    } else if (absDifference <= 15) {
      message += " You are warm.";
    } else if (absDifference <= 30) {
      message += " You are cold.";
    } else {
      message += " You are freezing!";
    }
  }

  showMessage(message);
}

/** 
 * Updates the turn-indicator view and increments turnCounter after each turn
*/
function useTurn() {
  $('.circle-container').children().eq(turnCounter).addClass('empty-circle');
  turnCounter++;
}

/**
 * Displays a temperature message to the user.  
 * @param {string} message The message to display.
 */
function showMessage(message) {
  $('.temperature').text(message).slideDown(175);

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

  $('.submit-button').click(function() {
    handlePlayerInput();
  });

  $('.start-over-button').click(function() {
    handleStartOverButtonClicked();
  });

  $('.guess-input').keyup(function() {
    $('.submit-button').prop("disabled", !validateSubmission());
  });

  $('.guess-input').keypress(function(e) {
    if (e.which == 13) {
      handlePlayerInput();
    }
  });
});
