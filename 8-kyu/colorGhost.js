/*

- TITLE:
Color Ghost

- DESCRIPTION:
Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"

- LABELS:
#OBJECT_ORIENTED_PROGRAMMING #FUNDAMENTALS

*/

const COLORS = ["white", "yellow", "purple", "red"];

const randomIndex = (array) => Math.round(Math.random() * (array.length - 1));

const randomColor = () => COLORS[randomIndex(COLORS)];

function Ghost() {
    this.color = randomColor();
}
