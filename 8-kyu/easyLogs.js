/*

- TITLE:
easy logs

- DESCRIPTION:
Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

- LABELS:
#ALGORITHMS

*/

function calculateLogWithBase(number, base) {
  return Math.log(number) / Math.log(base);
}

function logs(x, a, b) {
  return calculateLogWithBase(a, x) + calculateLogWithBase(b, x);
}
