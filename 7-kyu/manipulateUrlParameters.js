/*

- TITLE:
Manipulate URL Parameters

- DESCRIPTION:
You need to write a function ( addOrChangeUrlParameter(url, keyValueParameter) ) that can manipulate URL parameters.

It should be able to

add a parameter to an existing URL,
but also to

change a parameter if it already exists.
Example:

addOrChangeUrlParameter("www.example.com", "key=value") 
// -> 'www.example.com?key=value' (adds a parameter).

addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" ) 
// -> 'www.example.com?key=value&key2=value2' (adds another parameter).

addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" ) 
// ->'www.example.com?key=newValue' (changes the parameter).

- LABELS:
#STRINGS #PARSING #REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

/**
 * Play with URLs
 * @param {string} url - The URL that's we want to manipulate
 * @param {string} param - The parameter that we want to change or add
 * @returns {string} The result URL.
 */
function addOrChangeUrlParameter(url, param) {
    if (!param) return url;
    const regExp = getParamRegExp(param);
    const shouldUpdate = regExp.test(url);
    if (shouldUpdate) return url.replace(regExp, param);
    const delimiter = url.indexOf("?") === -1 ? "?" : "&";
    return [url, param].join(delimiter);
}

function getParamRegExp(param) {
    const key = param.split("=")[0];
    return new RegExp(`${key}=[^&]*`);
}
