/*

- TITLE:
Count the number of cubes with paint on

- DESCRIPTION:
Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

Examples:
countSquares(2) --> 26
countSquares(4) --> 98

- LABELS:
#PUZZLES

*/

function countSquares(cuts) {
  if (cuts === 0) return 1;
  const totalCubes = (cuts + 1) ** 3;
  const blueCubes = (cuts - 1) ** 3;
  return totalCubes - blueCubes;
}
