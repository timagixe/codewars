/*

- TITLE:
Every archer has its arrows

- DESCRIPTION:
#It's show time! Archers have gathered from all around the world to participate in the Arrow Function Faire. But the faire will only start if there are archers signed and if they all have enough arrows in their quivers - at least 5 is the requirement! Are all the archers ready?

#Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

#Argument archers is an array of integers, in which each element corresponds to the number of arrows each archer has.

#Return Your function must return true if the requirements are met or false otherwise.

#Examples archersReady([1, 2, 3, 4, 5, 6, 7, 8]) returns false because there are archers with not enough arrows.

archersReady([5, 6, 7, 8]) returns true.

- LABELS:
#FUNDAMENTALS

*/

function archersReady(archers) {
  if (!archers || archers.length === 0) return false;
  return archers.every((archer) => archer >= 5);
}
