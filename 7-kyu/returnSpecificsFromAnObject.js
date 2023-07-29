/*

- TITLE:
Return Specifics from an Object.

- DESCRIPTION:
Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

array should return numbers first then all the method names in the order they are in the object
strings, booleans, arrays should be ignored.
if the object is empty, then the array should return the following string: The Object is Empty
Example:

returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
This would return [1,2,3,'e'] 

- LABELS:
#FUNDAMENTALS

*/

function returnSpecifics(obj) {
    const nums = [];
    const methods = [];
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === "number") nums.push(value);
        if (typeof value === "function") methods.push(key);
    }
    const result = nums.concat(methods);
    if (!result.length) return ["The Object is Empty"];
    return result;
}
