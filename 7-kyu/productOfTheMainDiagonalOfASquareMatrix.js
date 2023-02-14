/*

- TITLE:
Product of the main diagonal of a square matrix.

- DESCRIPTION:
Given a list of rows of a square matrix, find the product of the main diagonal.

Examples:

mainDiagonalProduct([[1,0],[0,1]]) => 1

mainDiagonalProduct([[1,2,3],[4,5,6],[7,8,9]]) => 45
http://en.wikipedia.org/wiki/Main_diagonal

- LABELS:
#MATRIX #LINEAR_ALGEBRA #ALGORITHMS

*/

function mainDiagonalProduct(matrix) {
  return matrix.reduce((total, row, index) => total * row[index], 1);
}
