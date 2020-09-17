// How should this game work?
// 1. Clicking either "SHOOT" button represents a shot for that team.
//      • Shots should have a random chance of succeeding or failing. (Sounds like Internet research time! How do you determine a random chance in JavaScript?)
//      • The number of shots taken should increase for every click of the "SHOOT" button.
//      • The number of goals should only increase when the shot is successful.
// 2. Clicking the "RESET" button should reset all the shot and goal counters and add 1 to the number of resets.

// Bonus
// 1. Play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element and how to use it in JS. You will also need to find a sound file to use.
// 2. Use what you know about HTML and CSS to make the page look better!
// 3. Upon reset, display who won the game.

// let us click the reset button to reset the page

//display.reset;

// let's click the shoot buttons for either team one or two
// then let us increment the total number of shots taken
// by 1 for each team
// then run a random number generator
// if the random number is even that team scores a goal

//let teamoneNumshots = 0;
const teamOneNumshots = document.querySelector("#teamone-numshots");
const teamOneShootButton = document.querySelector("#teamone-shoot-button");
const teamOneGoals = document.querySelector("#teamone-numgoals");
teamOneShootButton.addEventListener("click", function () {
  console.log("teamone's shoot button clicked");
  let newCounterValue = Number(teamOneNumshots.innerHTML) + 1;
  teamOneNumshots.innerHTML = newCounterValue;
  // returns a random integer from 0 to 9
  // Math.floor(Math.random() * 10);
  // if it is even, teamone scores a goal
  if (Math.floor(Math.random() * (10 - 0) + 1) % 2 == 0) {
    let newGoalValue = Number(teamOneGoals.innerHTML) + 1;
    teamOneGoals.innerHTML = newGoalValue;
  }
});

//let teamTwoNumshots = 0;
const teamTwoNumshots = document.querySelector("#teamtwo-numshots");
const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
const teamTwoGoals = document.querySelector("#teamtwo-numgoals");
teamTwoShootButton.addEventListener("click", function () {
  console.log("teamtwo's shoot button clicked");
  let newCounterValue = Number(teamTwoNumshots.innerHTML) + 1;
  teamTwoNumshots.innerHTML = newCounterValue;
  // returns a random integer from 0 to 9
  // Math.floor(Math.random() * 10);
  // if it is even, teamtwo scores a goal
  if (Math.floor(Math.random() * (10 - 0) + 1) % 2 == 0) {
    let newGoalValue = Number(teamTwoGoals.innerHTML) + 1;
    teamTwoGoals.innerHTML = newGoalValue;
  }
});
