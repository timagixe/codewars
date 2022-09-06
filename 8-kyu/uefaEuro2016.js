/*

- TITLE:
UEFA EURO 2016

- DESCRIPTION:
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

- LABELS:
#STRINGS #ARRAYS #FUNDAMENTALS

*/

function getResultString(teams, result) {
  return `At match ${teams.join(" - ")}, ${result}`;
}

function uefaEuro2016(teams, [firstTeamScore, secondTeamScore]) {
  if (firstTeamScore === secondTeamScore) {
    return getResultString(teams, "teams played draw.");
  }
  const winner = firstTeamScore > secondTeamScore ? teams[0] : teams[1];
  return getResultString(teams, `${winner} won!`);
}
