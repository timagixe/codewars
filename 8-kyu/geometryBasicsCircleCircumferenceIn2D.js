/*

- TITLE:
Geometry Basics: Circle Circumference in 2D

- DESCRIPTION:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

Write a function calculating circumference of a Circle.

Tests round answers to 6 decimal places.

- LABELS:
#GEOMETRY #FUNDAMENTALS

*/

function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
}
