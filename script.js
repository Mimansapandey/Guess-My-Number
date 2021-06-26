'use strict';


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//Declaring Functions

function displayMessage(messages) {
  document.querySelector('.message').textContent = messages;
}

//Setting up defaults
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Case 1: No guess
  if (!guess) {
    displayMessage('Pick a Number between 1 and 20 😥');

  // Case 2: Correct Guess
  } else if (guess === secretNumber) {
    displayMessage('Yay! your guess was correct!🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  //Case 3: Low guess
  } else if (guess < secretNumber && guess > 0) {
    if (score > 1) {
      displayMessage('Your guess was too low 😥');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.backgroundColor = 'white';
      //   document.querySelector('.message').textContent = 'You Lost 😦';
      //   document.querySelector('.number').textContent = '😭';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').style.width = '20rem';
      document.querySelector('.number').textContent = secretNumber;
    }

  // Case 4: High Guess
  } else if (guess > secretNumber && guess < 21) {
    if (score > 1) {
      displayMessage('Your guess was too high 😦');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost 😦');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '20rem';
      //   document.querySelector('.number').style.backgroundColor = 'white';
      //   document.querySelector('.number').textContent = '😭';

      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
    }

     // Case 5: Invalid Input
  } else {
    displayMessage('Invalid Input 😶‍🌫️');
  }
});

//'Again' Button Click Event

document.querySelector('.number').textContent = '?';
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start Guessing....';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
