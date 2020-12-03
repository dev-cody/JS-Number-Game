//Grab elements
const check = document.querySelector('.check');
const num = document.querySelector('.number');
const playAgain = document.querySelector('.again');
//Grab the message
let message = document.querySelector('.message');
let guessScore = document.querySelector('.score');
//Creating the function

//Creating the random number
let number = Math.trunc(Math.random() * 20)+1; 

//Score
let score = 20;
let highScore = 0;

const checkNumber = (e) => {
    //Grabbing the guessed number
    const guess = document.querySelector('.guess').value;

    //If no number is selected
    if (!guess) {
        message.textContent = '🚫 No Number!';
    //When player wins
    } else if (guess == number) {
        message.textContent = 'That is correct!🥳';
        num.textContent = number;
        document.querySelector('body').style.backgroundColor = '#d4cbb2';
        num.style.width = '20rem';
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

//Creating the reset function
const reset = (e) => {
    //Creating the random number
    number = Math.trunc(Math.random() * 20)+1; 
    //Reset the school
    score = 20;
    displayMessage('Start guessing...')
    guessScore.textContent = score;
    num.textContent = '?';
    document.querySelector('.guess').value = '';

    //Reset the CSS
    document.querySelector('body').style.backgroundColor = '#222';
    num.style.width = '15rem';
};

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

//Event listeners
check.addEventListener('click', checkNumber);
playAgain.addEventListener('click', reset);


