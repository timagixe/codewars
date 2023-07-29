/*

- TITLE:
Surface Area and Volume of a Box

- DESCRIPTION:
Write a function that returns the total surface area and volume of a box as an array: [area, volume]

- LABELS:
#GEOMETRY #FUNDAMENTALS

*/

function calculateBoxArea(width, height, depth) {
    return 2 * width * height + 2 * height * depth + 2 * depth * width;
}

function calculateBoxVolume(width, height, depth) {
    return width * height * depth;
}

function getSize(width, height, depth) {
    return [
        calculateBoxArea(width, height, depth),
        calculateBoxVolume(width, height, depth)
    ];
}
