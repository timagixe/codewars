/*

- TITLE:
Creating Elements with React

- DESCRIPTION:
Your task is to create two wrapper methods called createElement and createUnorderedList for our own purposes.

The createElement method should take in a content, tag, and properties, similar to the React method. We should be able to call this method with just content like createElement('Hello World') and by default it should create a div with the content "Hello World".

The createUnorderedList method should take in list, which is an array strings and create a ul element, whose children are li elements containing the values from the list. Given an array ['apples', 'oranges', 'bananas'], the createUnorderedList method should return a react element with this heirarchy:

<ul>
  <li>apples</li>
  <li>oranges</li>
  <li>bananas</li>
</ul>
Also, React suggests that you always supply a key property when creating dynamic children so be sure to create a unique key for each child li created.

- LABELS:
#REACT #FUNDAMENTALS

*/

const React = require("react");

function createElement(content, tag = "div", props) {
  return React.createElement(tag, props, content);
}

function createUnorderedList(list) {
  const listItems = list.map((entry, index) =>
    createElement(entry, "li", { key: index })
  );
  return createElement(listItems, "ul");
}
