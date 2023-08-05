/*

- TITLE:
Dad is Commatose

- DESCRIPTION:
Your dad doesn't really get punctuation, and he's always putting extra commas in when he posts. You can tolerate the run-on sentences, as he does actually talk like that, but those extra commas have to go!

Write a function called dadFilter that takes a string as argument and returns a string with the extraneous commas removed. The returned string should not end with a comma or any trailing whitespace.

- LABELS:
#FUNDAMENTALS #STRINGS #REGULAR_EXPRESSIONS

*/

function dadFilter(str) {
    const regexp = /,+/g;
    return str.trim().replace(regexp, ",").replace(/,$/, "");
}
