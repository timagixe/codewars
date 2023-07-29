/*

- TITLE:
Area of a Square

- DESCRIPTION:
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

- LABELS:
#FUNDAMENTALS #MATHEMATICS #GEOMETRY

*/

function squareArea(arcLength) {
    const circleLength = arcLength * 4;
    const radius = circleLength / (2 * Math.PI);
    const area = radius ** 2;
    const areaConverted = area.toFixed(2);
    return Number(areaConverted);
}
