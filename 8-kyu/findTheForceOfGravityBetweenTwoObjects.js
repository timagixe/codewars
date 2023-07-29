/*

- TITLE:
Find the force of gravity between two objects

- DESCRIPTION:
Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are given :

arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers
arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers
mass units are :

kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)
distance units are :

meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)
Note
value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution

- LABELS:
#ALGORITHMS

*/

const GRAVITY_CONSTANT = 6.67 / 10 ** 11;

const MASS_UNITS = {
    g: "g",
    kg: "kg",
    mg: "mg",
    μg: "μg",
    lb: "lb"
};

const DISTANCE_UNITS = {
    m: "m",
    cm: "cm",
    mm: "mm",
    μm: "μm",
    ft: "ft"
};

function convertMassToKg(value, convertFromUnit) {
    switch (convertFromUnit) {
        case MASS_UNITS.g:
            return value / 1000;
        case MASS_UNITS.mg:
            return value / 1000 ** 2;
        case MASS_UNITS.lb:
            return value * 0.453592;
        case MASS_UNITS.μg:
            return value / 1000 ** 3;
        default:
            return value;
    }
}

function convertDistanceToM(value, convertFromUnit) {
    switch (convertFromUnit) {
        case DISTANCE_UNITS.cm:
            return value / 10 ** 2;
        case DISTANCE_UNITS.mm:
            return value / 10 ** 3;
        case DISTANCE_UNITS.μm:
            return value / 10 ** 6;
        case DISTANCE_UNITS.ft:
            return value * 0.3048;
        default:
            return value;
    }
}

function calculateGravityForce({
    firstObjectMass,
    secondObjectMass,
    distanceBetween
}) {
    return (
        (GRAVITY_CONSTANT * firstObjectMass * secondObjectMass) /
        distanceBetween ** 2
    );
}

function solution(valuesArray, unitsArray) {
    const [firstObject, secondObject, distance] = valuesArray;
    const [firstObjectUnit, secondObjectUnit, distanceUnit] = unitsArray;

    return calculateGravityForce({
        firstObjectMass: convertMassToKg(firstObject, firstObjectUnit),
        secondObjectMass: convertMassToKg(secondObject, secondObjectUnit),
        distanceBetween: convertDistanceToM(distance, distanceUnit)
    });
}
