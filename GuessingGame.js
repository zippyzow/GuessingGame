/**
 * Created by haileykeen on 11/22/15.
 */
/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

// Fetch the Players Guess

function getPlayerGuess() {
  //player enters guess in input field
}




/* **** Event Listeners/Handlers ****  */

$(function() {

  // Clicking Submit button
  $(".submit-button").click(function () {
    console.log("Clicked");
  });

  // Entering in guess into input field 
  $(".guess-input").keyup(function () {
    console.log("Typed");
  })

});


