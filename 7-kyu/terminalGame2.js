/*

- TITLE:
Terminal Game #2

- DESCRIPTION:
Create the hero move method
Create a move method for your hero to move through the level.

Adjust the hero's position by changing the position attribute. The level is a grid with the following values:

00	01	02	03	04
10	11	12	13	14
20	21	22	23	24
30	31	32	33	34
40	41	42	43	44
The dir argument will be a string

up
down
left
right
If the position is not inside the level grid the method should throw an error and not move the hero

- LABELS:
#FUNDAMENTALS

*/

const MAX_POSITION = 4;
const MIN_POSITION = 0;

Hero.prototype.move = function (dir) {
  let [y, x] = this.position.split("").map(Number);
  if (dir === "up") y--;
  if (dir === "down") y++;
  if (dir === "left") x--;
  if (dir === "right") x++;
  if (
    y < MIN_POSITION ||
    y > MAX_POSITION ||
    x < MIN_POSITION ||
    x > MAX_POSITION
  ) {
    throw new Error("Cannot move.");
  }
  this.position = `${y}${x}`;
};
