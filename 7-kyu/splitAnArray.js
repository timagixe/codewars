/*

- TITLE:
Split an array

- DESCRIPTION:
Split an array of objects into 2 arrays based on truthiness of a provided property. The return value should be an array whose first element is an array of the truthy values, and whose second element is an array of the falsey values.

Javascript example:

var obj1 = { prop: true },
    obj2 = { prop: false };
    
split([obj1, obj2], 'prop');
// [[obj1], [obj2]]
CoffeeScript example:

obj1 = { prop: true }
obj2 = { prop: false }

split [obj1, obj2], 'prop'
# [[obj1], [obj2]]

- LABELS:
#FUNDAMENTALS

*/

function split(arr, prop) {
    return arr.reduce(
        (result, value) => {
            const [truthy, falsy] = result;
            if (value[prop]) {
                truthy.push(value);
                return result;
            }
            falsy.push(value);
            return result;
        },
        [[], []]
    );
}
