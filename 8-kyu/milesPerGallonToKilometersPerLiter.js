/*

- TITLE:
Miles per gallon to kilometers per liter

- DESCRIPTION:
Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

- LABELS:
#ALGORITHMS

*/

const LITRES_IN_GALLON = 4.54609188;
const KILOMETERS_IN_MILE = 1.609344;

function converter(mpg) {
    const converted = (mpg * KILOMETERS_IN_MILE) / LITRES_IN_GALLON;
    return toFixedPoint(converted, 2);
}

function toFixedPoint(value, digits) {
    return Number(value.toFixed(digits));
}
