// initialize the game
let initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissor");
    startGame ? playGame() : alert("Ok, maybe next time")
}

// Get user-input
const getplayerChoice = () =>{
    const userInput = prompt("Please enter rock, paper, or scissor");
    console.log(userInput);
    return userInput; 
}

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === ""){
        return playerChoice.trim().toLowerCase();
    }
    else{
        return false ; 
    }
    
}

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissor");
}

const decideNotToPlay = () =>{
    alert("I gues you have changed your mind, maybe next time");
}

const evaluatePlayerChoice = (playerChoice) => {
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissor") {
        return playerChoice; 
    }
    else {
        return false;
    }
}

const getComputerChoice = () => {
    const arrayChoice = ["rock", "paper", "scissor"]; 
    const computerInput = Math.floor(Math.random() * arrayChoice.length);
    return arrayChoice[computerInput];
    
}

const determineWinner = () =>{
    let winner = player === computer ? "Tie game"
        : player === "scissor" && computer === "rock" ? "computer wins"
        : player === "rock" && computer === "paper" ? "computer wins"
        : player === "paper" && computer === "scissor" ? "computer wins" : "player wins";
    return winner;
}

const displayResult = (result) => {
    alert(result);
}

const askToPlayAgain = () => {
    return confirm("Play Again");
    
}

const thanksForPlaying = () =>{
   alert("Ok, Thanks for playing"); 
}



// play the game
function gameLogic(player){
    if (player === "rock" || player === "paper" || player === "scissor") {
        const computerChoice = ["rock", "paper", "scissor"]; 
        const computerInput = Math.floor(Math.random() * computerChoice.length);
        const computer = computerChoice[computerInput];
        let result = player === computer ? "Tie game"
        : player === "scissor" && computer === "rock" ? "computer wins"
        : player === "rock" && computer === "paper" ? "computer wins"
        : player === "paper" && computer === "scissor" ? "computer wins" : "player wins";
        alert(result);
        playRepeat()
    }
    else {
        alert("Enter proper name")
    }
}

const playGame = () =>{
    while(true){
        const playerChoice = getplayerChoice(); 
        playerChoice = formatPlayerChoice(playerChoice); 
        if(playerChoice === ""){
            invalidChoice();
            continue; 
        }
        if(!playerChoice){
            decideNotToPlay();
            break; 
        }
        playerChoice = evaluatePlayerChoice(playerChoice)
        if(!playerChoice){
            invalidChoice();
            continue; 
        }
        const computerChoice = getComputerChoice(); 
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if(askToPlayAgain()){
            continue; 
        }
        else{
            thanksForPlaying();
            break; 
        }
    }
}

initGame(); 


// let userBoolean = confirm("Shall we play rock, paper, or scissor");
// if (userBoolean) {
//     while(userBoolean){
        
//         let userInput = prompt("Please enter rock, paper, or scissor");
//         if (userInput) {
//             let player = userInput.trim().toLowerCase();

//             if (player === "rock" || player === "paper" || player === "scissor") {
//                 const computerChoice = ["rock", "paper", "scissor"]; 
//                 const computerInput = Math.floor(Math.random() * computerChoice.length);
//                 const computer = computerChoice[computerInput];
//                 let result = player === computer ? "Tie game"
//                     : player === "scissor" && computer === "rock" ? "computer wins"
//                         : player === "rock" && computer === "paper" ? "computer wins"
//                             : player === "paper" && computer === "scissor" ? "computer wins" : "player wins";
//                 alert(result);
//                 const playAgain = confirm("Play Again");
//                 if(!playAgain) alert("Ok, thanks for playing");
//                 continue; 
//             }

//             else {
//                 alert("You didn't enter rock, paper or scissor");
//                 continue;
//             }

//         }
//         else {
//             alert("I guess you have changed your mind, maybe next time");
//         }
//     }
// }

// else {
//     alert("Okay, maybe next time");
// }
