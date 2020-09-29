import {countsAsAYes} from './counts-as-a-yes.js';

// import functions and grab DOM elements
const button = document.getElementById('start-button');
const results = document.getElementById('results');

button.addEventListener('click', () => {
    console.log()
    const userName = prompt('What is your name?');

    const userHasConfirmed = confirm('Are you sure you want to take this quiz?');

if (!userHasConfirmed) {
    alert('You have opted out, Wise Decision!');
    return;
}

let correctAnswers = 0;
// initialize state
const bridgeResponse = prompt(`Okay ${userName}! Does this tale involve a bridge in any way?`);

if (countsAsAYes(bridgeResponse)) {
    correctAnswers++;
}

const authorResponse = prompt(`Okay ${userName}! Was this tale written by Charles Dickens?`);

if (!countsAsAYes(authorResponse)) {
    correctAnswers++;
}

const dammitResponse = prompt(`Okay ${userName}! Is Mr. Dammit dead by the end of the tale?`);

if (countsAsAYes(dammitResponse)) {
    correctAnswers++;
}

alert('Quiz complete! Check the page for your results...if you dare!');

results.textContent = `Hey ${userName}, you got ${correctAnswers} correct out of 3.`;

const percent = Math.floor(correctAnswers / 3 * 100)
results.textContent = `Hey ${userName}, you got ${percent}%`;




});

// set event listeners to update state and DOM