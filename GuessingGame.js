/**
 * Created by haileykeen on 11/22/15.
 */
/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

// Fetch the Players Guess

function playersGuessSubmission() {
  //player enters guess in input field 
}




/* **** Event Listeners/Handlers ****  */

// Clicking Submit button
$(function() {
  $(".submit-button").click(function () {
    console.log("Clicked");
  });
});

