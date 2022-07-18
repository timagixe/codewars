/*

- TITLE:
Duck Duck Goose

- DESCRIPTION:
Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

- LABELS:
#ARRAYS #LISTS #FUNDAMENTALS

*/

function duckDuckGoose(players, goose) {
  const playerIndex = (goose - 1) % players.length;
  return players[playerIndex].name;
}
