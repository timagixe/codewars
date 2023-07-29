/*

- TITLE:
Convert between radians and degrees

- DESCRIPTION:
Extend the Math object (JS) or module (Ruby and Python) to convert degrees to radians and viceversa. The result should be rounded to two decimal points. Note that all methods of Math object are static.

Example:

Math.degrees(Math.PI) //180deg
Math.radians(180) //3.14rad

- LABELS:
#MATHEMATICS #FUNDAMENTALS

*/

Math.degrees = function (radians) {
    const value = (radians * 180) / Math.PI;
    const fixed = parseFloat(value.toFixed(2));
    return `${fixed}deg`;
};

Math.radians = function (degrees) {
    const value = (degrees * Math.PI) / 180;
    const fixed = parseFloat(value.toFixed(2));
    return `${fixed}rad`;
};
