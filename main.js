let userBoolean = confirm("Shall we play rock, paper, or scissor"); 
if (userBoolean){
    let userInput = prompt("Please enter rock, paper, or scissor");
    if (userInput){
        let player = userInput.trim().toLowerCase();
        if(player === "rock" || player === "paper" || player === "scissor"){
            let computerInput = Math.floor(Math.random()* 3) + 1;
            computer = computerInput === 1 ? 'rock' : computerInput === 2 ? 'paper' : 'scissor';  
        let result = player === computer ? "Tie game" 
        : player === "scissor" && computer === "rock" ? "computer wins" 
        : player === "rock" && computer === "paper" ? "computer wins" 
        : player === "paper" && computer === "scissor" ?  "computer wins" : "player wins"; 
        alert(result); 
        let playAgain = confirm("Play Again");
        playAgain ? location.reload() : alert("Ok, thanks for playing");
        }

        else{
            alert("You didn't enter rock, paper or scissor"); 
            location.reload();
        }

    }
    else {
        alert("I guess you have changed your mind, maybe next time"); 
    }
}
else{
    alert("Okay, maybe next time"); 
}
