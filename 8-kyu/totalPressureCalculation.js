/*

- TITLE:
Total pressure calculation

- DESCRIPTION:
Given the molecular mass of two molecules.

For more details, follow link: https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a/

- LABELS:
#FUNDAMENTALS

*/

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function divise(x, y) {
    return x / y;
}

const solution = (
    molarMass1,
    molarMass2,
    givenMass1,
    givenMass2,
    volume,
    temp
) => {
    return divise(
        multiply(
            add(divise(givenMass1, molarMass1), divise(givenMass2, molarMass2)),
            multiply(0.082, add(temp, 273.15))
        ),
        volume
    );
};
