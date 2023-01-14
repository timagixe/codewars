/*

- TITLE:
Rock Paper Scissors

- DESCRIPTION:
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

- LABELS:
#FUNDAMENTALS

*/

const BEATS = {
  scissors: "paper",
  paper: "rock",
  rock: "scissors"
};

function rps(playerOne, playerTwo) {
  if (playerOne === playerTwo) return "Draw!";
  const winner = BEATS[playerOne] === playerTwo ? 1 : 2;
  return getMessage(winner);
}

function getMessage(winner) {
  return `Player ${winner} won!`;
}
