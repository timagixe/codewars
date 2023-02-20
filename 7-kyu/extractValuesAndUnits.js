/*

- TITLE:
Extract Values and Units

- DESCRIPTION:
Given a string representing a numerical value and a unit, e.g. "12px", return the value and units like so:

input: "12px"
output: {val: 12, units: "px"}
Assume all inputs have a numerical value, but not necessarily any specified units.

There may also be space(s) between the value and the unit, in which case ignore them.

- LABELS:
#PARSING #FUNDAMENTALS

*/

const VALUE_REGEXP = /^[-0-9.]+/gi;
const UNITS_REGEXP = /[a-z%]+$/gi;

function valAndUnits(s) {
  const matchedValue = s.match(VALUE_REGEXP);
  const value = matchedValue ? parseFloat(matchedValue[0]) : "";
  const matchedUnits = s.match(UNITS_REGEXP);
  const units = matchedUnits ? matchedUnits[0] : "";
  return { val: value, units };
}
