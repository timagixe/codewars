/*

- TITLE:
Sports league table - help your local team!

- DESCRIPTION:
Sports league table
Your local sports team manager wants to know how the team is doing in the league. You have been asked to write the manager a function that will allow them to update the league table.

League details
The possible results in the league are 'draw' and 'win' with 3 points for a win and 1 point each for a draw.

The league table is stored in order from top to bottom in a 2-D array called leagueTable (Javascript) or league_table (Ruby and Python) with each element containing the team name, and the number of points that team has. For example:

[["teamC", 6], ["teamA", 4], ["teamB", 4], ["teamD", 3]]
Function specification
Write a function which takes three parameters: first team's name, second team's name, and the result of the match (in Python version the league_table will be passed as an additional argument). The function must add the correct points to teams 1 and 2 based on the result of the match, and reorder the array based on new the league positions. League positions should be based first on the number of points then if points are equal, alphabetically. The function must also return the updated league table.

- LABELS:
#FUNDAMENTALS #ARRAYS #ALGORITHMS

*/

// let leagueTable = [
//     ["teamA", 3],
//     ["teamB", 3],
//     ["teamC", 3],
//     ["teamD", 3]
// ];

function leagueCalculate(team1, team2, result) {
    const table = new Map(leagueTable);

    if (result === "draw") {
        table.set(team1, table.get(team1) + 1);
        table.set(team2, table.get(team2) + 1);
    }

    if (result === "win") {
        table.set(team1, table.get(team1) + 3);
    }

    leagueTable = Array.from(table).sort((left, right) => {
        const diff = right[1] - left[1];
        if (!diff) return left[0].localeCompare(right[0]);
        return diff;
    });

    return leagueTable;
}
