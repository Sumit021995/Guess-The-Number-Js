let form = document.querySelector('.form');
let submit = document.getElementById('subt');
let p = document.createElement('p');
let userInput = document.getElementById('guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let randomNumber = parseInt((Math.random()*100) + 1);
let lowOrHi = document.querySelector('.lowOrHi');

// we need to show an array og gussed numbers
let prevGuess = [];
// let number of guesses
let numGuess = 1;
// if our game ends or say if our 10 guesses ends then we need to restart the game of gussing so we need a start over
let StartOver = document.querySelector('.resultParas');
// to start a new game we also need
let playGame = true;

// first check if available to play game
if(playGame){
    submit.addEventListener('click',function (e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
// to check the guess value is valid or not  
if(isNaN(guess)){
    alert('Please enter a valid number');
}else if(guess < 1){
    alert('Please enter a number more than 1')
}else if (guess > 100){
    alert('Please enter a number less then 100')
}else {
    prevGuess.push(guess);
    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over . Random number is ${randomNumber}`);
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
}

}
function checkGuess(guess){
if(guess === randomNumber){
    displayMessage(`You guessed it right`);
    endGame();
}else if(guess < randomNumber){
displayMessage(`Number is too low`)
}
else if(guess > randomNumber){
displayMessage(`Number is too high`)
}

}

function displayGuess(guess){
userInput.value = ``;
guessSlot.innerHTML += `${guess},  `;
remaining.innerHTML = `${10-numGuess}`
numGuess++;
}

function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
   
    userInput.value = ``;
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id = 'newGame'>Start New Game</h2>`
    StartOver.appendChild(p);  
    playGame = false;
    startNewGame();
    remaining.innerHTML = '0';
}

function startNewGame(){
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
e.preventDefault();
randomNumber = parseInt((Math.random()*100) + 1);
prevGuess=[];
guessSlot.innerHTML = '';
numGuess = 1;
remaining.innerHTML = `${11-numGuess}`;
userInput.removeAttribute('disabled','');
StartOver.removeChild(p);
playGame=true;
});
}


// form.addEventListener('submit',function(){
    
    
    //this is a button as you can seen on live server from index.html
    // let guessSubmit = document.querySelector('.guessSubmit');
//     if(userInput === randomNumber){
//         let lowOrHi = document.querySelector('.lowOrHi');
//         lowOrHi.innerHTML = 'Your guess is correct';
        
//     } else if(userInput > randomNumber){
//         lowOrHi.innerHTML = 'Your guess is greater than Random Number';

//     }
//      else if(userInput < randomNumber){
//         lowOrHi.innerHTML = 'Your guess is less  than Random Number';

//     }




 
// });
