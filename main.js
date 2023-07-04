const winMsg = "Victory";
const loseMsg = "Crushing Defeat";
const tieMsg = "Tie";

const moveList = ["Rock", "Paper", "Scissors"];
var playerChoice = "";
var compChoice = "";

const buttons = document.getElementsByTagName("button");
const pChoice = document.getElementById("ph-game__player");
const cChoice = document.getElementById("ph-game__comp");
const heading = document.getElementById("status-head");

const buttonPressed = e => {
    const selectedButton = e.target;
    playerChoice = selectedButton.innerHTML;
    pChoice.innerHTML = `Player Choice: ${selectedButton.innerHTML}`;
    console.log("player", playerChoice);

    startGame(playerChoice);
    document.getElementById(`ph-moves`).setAttribute(`class`, `ph-hide`)
    document.getElementById(`ph-reset`).setAttribute(`class`, ``)
};


for (var button of buttons) {
    button.addEventListener("click", buttonPressed);
}



function randomMove() {
    var moveIndex = Math.floor(Math.random() * 3);
    // var compChoice = moveList[moveIndex];
    document.getElementById("ph-game__comp").innerHTML = `Computer Choice: ${moveList[moveIndex]}`

    return moveIndex;
}
function gameRule(playerChoice, compChoice) {

    if (playerChoice === compChoice) {
        return tieMsg;
    } else if (
        (playerChoice === "Rock" && compChoice === "Scissors") ||
        (playerChoice === "Paper" && compChoice === "Rock") ||
        (playerChoice === "Scissors" && compChoice === "Paper")
    ) {
        return winMsg;
    } else {
        return loseMsg;
    }
}

function startGame() {
    compChoice = moveList[randomMove()];

    console.log("Computer", compChoice);
    var resultMsg = gameRule(playerChoice, compChoice);



    console.log(resultMsg);
    document.getElementById("status-head").innerHTML = resultMsg
}



// if (resultMSg === "Victory") {
//     heading.innerHTML = winMsg;
// }
// else if (resultMSg === "Tie") {
//     heading.innerHTML = tieMsg;
// }
// else {
//     heading.innerHTML = loseMsg;
// }