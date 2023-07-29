/*

- TITLE:
Trigrams

- DESCRIPTION:
Trigrams are a special case of the n-gram, where n is 3. One trigram is a continous sequence of 3 chars in phrase. Wikipedia

return all trigrams for the given phrase
replace spaces with underscore (_)
return an empty string for phrases shorter than 3
Example:

"the quick red" --> "the he_ e_q _qu qui uic ick ck_ k_r _re red"

- LABELS:
#FUNDAMENTALS

*/

function trigrams(phrase) {
    if (phrase.length <= 3) return "";
    const chunks = [];
    const text = phrase.replace(/ /g, "_");
    for (let index = 0; index < text.length - 2; index++) {
        const chunk = getTrigram(text, index, index + 3);
        chunks.push(chunk);
    }
    return chunks.join(" ");
}

function getTrigram(string, start, end) {
    return string.slice(start, end);
}
