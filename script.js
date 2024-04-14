const choices = ["kő", "papír", "olló" ];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice)
{
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  // console.log(computerChoice);
  let result = "";

  if(playerChoice === computerChoice)
  {
    result = "EZT KEZDJÜK ÚJBÓL..!";
  }

  else
  {
    switch(playerChoice)
    {
      case "kő":
      result = (computerChoice === "olló") ? "MA ESTE CSIRKEVACSORA!" : "Katonáink elestek!";
      break;

      case "papír":
      result = (computerChoice === "kő") ? "MA ESTE CSIRKEVACSORA!" : "Katonáink elestek!";
      break;

      case "olló":
      result = (computerChoice === "papír") ? "MA ESTE CSIRKEVACSORA!" : "Katonáink elestek!";
      break;
    }
  }


  playerDisplay.textContent = `Ready Player One: ${playerChoice}`;
  computerDisplay.textContent = `Azték ellenfél: ${computerChoice}`;
  resultDisplay.textContent = result;

  switch(result) {
    case "MA ESTE CSIRKEVACSORA!":
        resultDisplay.classList.remove("redText");
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;

    case "Katonáink elestek!":
        resultDisplay.classList.remove("greenText");
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;

    default:
        resultDisplay.classList.remove("greenText");
        resultDisplay.classList.remove("redText");
        break;
}


}