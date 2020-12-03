//Grab elements
const check = document.querySelector('.check');
const num = document.querySelector('.number');
//Creating the function

//Creating the random number
const number = Math.trunc(Math.random() * 20)+1; 
//Score
let score = 20;
let highScore = 0;

num.textContent = number;

const checkNumber = (e) => {
    //Grabbing the guessed number
    const guess = document.querySelector('.guess').value;
    //Grab the message
    let message = document.querySelector('.message');
    let guessScore = document.querySelector('.score');

    //If no number is selected
    if (!guess) {
        message.textContent = '🚫 No Number!';
    //When player wins
    } else if (guess == number) {
        message.textContent = 'That is correct!🥳';
    //When guess is larger
    } else if (guess > number) {
        message.textContent = 'That is too high!'
        if(score > 1) {
            score--;
            guessScore.textContent = score; 
        } else {
            message.textContent = 'You lost!😢 try again!'
            guessScore.textContent = 0;
        };
    //When guess is smaller
    } else if ( guess < number) {
        message.textContent = 'That is too low!'
        if(score > 1) {
            score--;
            guessScore.textContent = score; 
        } else {
            message.textContent = 'You lost!😢 try again!'
            guessScore.textContent = 0;
        };
    };
};

//Call the event
check.addEventListener('click', checkNumber);

