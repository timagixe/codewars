/*

- TITLE:
Grasshopper - Messi goals function

- DESCRIPTION:
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17

- LABELS:
#FUNDAMENTALS

*/

function goals(...leagues) {
  return leagues.reduce((a, b) => a + b);
}
