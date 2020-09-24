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

// lets do sound?
let myMusic;
myMusic = new sound("assets/audio/practice.mp3");

// may add a checkbox at top of page to play some background music?
const checkbox = document.querySelector("#myCheck");
checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    console.log("Music checkbox is checked");
    myMusic.play();
  } else {
    console.log("Music checkbox is not checked");
    myMusic.stop();
  }
});

// sound of arrow shooting
let mySound1;
mySound1 = new sound("assets/audio/arrow.mp3");

// sound of arrow hitting
let mySound2;
mySound2 = new sound("assets/audio/arrow-wall.mp3");

// sound of a win
let mySound3;
mySound3 = new sound("/assets/audio/win.wav");

// sound handling function
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

// Let's handle the reset button
const resetContainer = document.querySelector("#reset-container");
const resetBtn = document.querySelector("#reset-button");
const resetCount = document.querySelector("#num-resets");

resetBtn.addEventListener("click", function () {
  console.log("the reset button had been clicked");
  let newCounterValue = Number(resetCount.innerHTML) + 1;
  resetCount.innerHTML = newCounterValue;

  if (teamOneGoals.innerHTML > teamTwoGoals.innerHTML) {
    alert("Team One Wins!");
    mySound3.play();
  } else {
    alert("Team Two wins!");
    mySound3.play();
  }

  // simulate reset
  teamOneNumshots.innerHTML = 0;
  teamOneGoals.innerHTML = 0;
  teamTwoNumshots.innerHTML = 0;
  teamTwoGoals.innerHTML = 0;
});

// let's click the shoot buttons for either team one or two
// then let us increment the total number of shots taken
// by 1 for each team
// then run a random number generator
// if the random number is even that team scores a goal

// Team One
const teamOneNumshots = document.querySelector("#teamone-numshots");
const teamOneShootButton = document.querySelector("#teamone-shoot-button");
const teamOneGoals = document.querySelector("#teamone-numgoals");
teamOneShootButton.addEventListener("click", function () {
  console.log("teamone's shoot button clicked");
  mySound1.play();
  let newCounterValue = Number(teamOneNumshots.innerHTML) + 1;
  teamOneNumshots.innerHTML = newCounterValue;
  // returns a random integer
  // if it is even, teamone scores a goal
  if (Math.floor(Math.random() * (10 - 0) + 1) % 2 == 0) {
    let newGoalValue = Number(teamOneGoals.innerHTML) + 1;
    teamOneGoals.innerHTML = newGoalValue;
    mySound2.play();
  }
});

// Team Two
const teamTwoNumshots = document.querySelector("#teamtwo-numshots");
const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
const teamTwoGoals = document.querySelector("#teamtwo-numgoals");
teamTwoShootButton.addEventListener("click", function () {
  console.log("teamtwo's shoot button clicked");
  mySound1.play();
  let newCounterValue = Number(teamTwoNumshots.innerHTML) + 1;
  teamTwoNumshots.innerHTML = newCounterValue;
  // returns a random integer
  // if it is even, teamtwo scores a goal
  if (Math.floor(Math.random() * (10 - 0) + 1) % 2 == 0) {
    let newGoalValue = Number(teamTwoGoals.innerHTML) + 1;
    teamTwoGoals.innerHTML = newGoalValue;
    mySound2.play();
  }
});
