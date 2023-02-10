/*

- TITLE:
Playing with types

- DESCRIPTION:
JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

For example:

typing(2);            //returns "number=2"
typing(true);         //returns "boolean=true"
typing("test");       //returns "string="test""
typing([1,2,3]);      //returns "object=[1,2,3]"
typing({a:1,b:2});    //returns "object={"a":1,"b":2}"
typing(function(){}); //returns "function=function (){}"
typing(undefined);    //returns "undefined"

- LABELS:
#FUNDAMENTALS

*/

function typing(param) {
  if (param === undefined) return `${param}`;

  const type = typeof param;
  const value = type === "function" ? param.toString() : JSON.stringify(param);

  return `${type}=${value}`;
}
