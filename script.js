let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');

userScore.innerText = localStorage.getItem('userScore') || 0;
computerScore.innerText = localStorage.getItem('computerScore') || 0;

let userChoice = '';

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let tilesContainer = document.getElementsByClassName('tiles-container')[0];
let rulesContainer = document.getElementsByClassName('rules-container')[0];

let resultContainer = document.getElementsByClassName('result-parent')[0];


let userWinner = document.querySelector("#user-res")
let pcWinner = document.querySelector("#comp-res")

let nextBtn = document.getElementById('next')


document.getElementById('rules').addEventListener('click', function() {
    rulesContainer.style.opacity = 1;
    rulesContainer.style.pointerEvents = 'all';
    rulesContainer.style.display = 'block';
})
document.getElementById('close').addEventListener('click', function() {
    console.log(rulesContainer)
    rulesContainer.style.display = 'none';

})

/********* GAME START **************/
rock.addEventListener('click', function() {
    userChoice = 'rock';
    resultContainer.classList.remove('hide');
    tilesContainer.classList.add('hide');
    const compChoice = computerChoice();
    playGame(compChoice);
});
paper.addEventListener('click', function() {
    userChoice = 'paper';
    resultContainer.classList.remove('hide');
    tilesContainer.classList.add('hide');
    const compChoice = computerChoice();
    playGame(compChoice);
});
scissors.addEventListener('click', function() {
    userChoice = 'scissors';
    tilesContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    const compChoice = computerChoice(); 
    playGame(compChoice);
});

const playGame = (compChoice) => {
    let user = userChoice;
    let computer = compChoice;
    userWinner.classList.remove(`${user}`)
    pcWinner.classList.remove(`${computer}`)

    switch(user + computer) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(user, computer);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(user, computer);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            tie(user, computer);
            break;
    }
}

const computerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
const win = (userChoice,compChoice) =>{
    let userSelectedImg = document.getElementById('user-selected-img')
    let pcSelectedImg = document.getElementById('pc-selected-img')

    const status = document.querySelector('.game-status h2')
    status.textContent = "YOU WIN"
    userSelectedImg.src = `/assets/images/${userChoice}.png`
    pcSelectedImg.src = `/assets/images/${compChoice}.png`
    
    localStorage.setItem('userScore', parseInt(userScore.innerText) + 1)
    userScore.innerText =  parseInt(userScore.innerText) + 1
    userWinner.classList.add(`${userChoice}`)
    userWinner.classList.add('pulse')
    pcWinner.classList.add(`${compChoice}`)

    console.log(userScore, computerScore)
    if(userScore.innerText > computerScore.innerText){
        nextBtn.classList.remove('hide')
    }

}


const lose = (userChoice,compChoice) =>{
    let userSelectedImg = document.getElementById('user-selected-img')
    let pcSelectedImg = document.getElementById('pc-selected-img')

    const status =  document.querySelector('.game-status h2')
    status.textContent = "YOU LOST"

    userSelectedImg.src = `/assets/images/${userChoice}.png`
    pcSelectedImg.src = `/assets/images/${compChoice}.png`

    
    localStorage.setItem('computerScore', parseInt(computerScore.innerText) + 1)
    computerScore.innerText =  parseInt(computerScore.innerText) + 1
    userWinner.classList.add(`${userChoice}`)
    pcWinner.classList.add(`${compChoice}`)
    
    pcWinner.classList.add('pulse')

    
}
const tie = (userChoice,compChoice) =>{
    let userSelectedImg = document.getElementById('user-selected-img')
    let pcSelectedImg = document.getElementById('pc-selected-img')
    const status = document.querySelector('.game-status h2')
    status.textContent = "Tie up"


    userSelectedImg.src = `/assets/images/${userChoice}.png`
    pcSelectedImg.src = `/assets/images/${compChoice}.png`
    
    userWinner.classList.add(`${userChoice}`)
    pcWinner.classList.add(`${compChoice}`)

}
document.getElementById('play-again').addEventListener('click', function() {
    tilesContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    document.getElementsByClassName('final-container')[0].style.display = 'none'
    
    userWinner.className = ""
    pcWinner.className = ""

    userWinner.classList.add('tile')
    pcWinner.classList.add('tile')
    nextBtn.classList.add('hide')
    userChoice = '';
    userWinner.classList.remove('pulse')
})


nextBtn.addEventListener('click', function(){
    document.getElementsByClassName('score-banner')[0].classList.add('hide')
    document.getElementsByClassName('result-parent')[0].classList.add('hide')
    document.getElementsByClassName('final-container')[0].style.display = 'block'
    
    nextBtn.classList.add('hide')
    rulesContainer.classList.add('hide')
    tilesContainer.classList.add('hide')
    console.log('next')
})


document.getElementById('again').addEventListener('click', function() {
    tilesContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    userChoice = '';
    userWinner.classList.remove('pulse')
    pcWinner.classList.remove('pulse')
    document.getElementsByClassName('score-banner')[0].classList.remove('hide')
    document.getElementsByClassName('result-parent')[0].classList.add('hide')
    document.getElementsByClassName('final-container')[0].style.display = 'none'

    userScore.innerText = localStorage.getItem('userScore') || 0;
    computerScore.innerText = localStorage.getItem('computerScore') || 0;
    console.log('play again')
})