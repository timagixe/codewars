/*

- TITLE:
Invalid Input - Error Handling #1

- DESCRIPTION:
Error Handling is very important in coding and seems to be overlooked or not implemented properly.

#Task

Your task is to implement a function which takes a string as input and return an object containing the properties vowels and consonants. The vowels property must contain the total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}. Handle invalid input and don't forget to return valid ones.

#Input

The input is any random string. You must then discern what are vowels and what are consonants and sum for each category their total occurrences in an object. However you could also receive inputs that are not strings. If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. :)

Example:
Input: getCount('test')
Output: {vowels:1,consonants:3}

Input: getCount('tEst')
Output: {vowels:1,consonants:3}

Input getCount('    ')
Output: {vowels:0,consonants:0}

Input getCount()
Output: {vowels:0,consonants:0}


- LABELS:
#STRINGS #FUNDAMENTALS

*/

function getCount(words) {
    if (typeof words !== "string") return { vowels: 0, consonants: 0 };
    const vowels = words.match(/[aeiou]/gi) || [];
    const consonants = words.match(/[^aeiou_\W]/gi) || [];
    return { vowels: vowels.length, consonants: consonants.length };
}
