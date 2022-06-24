/*

- TITLE:
Leonardo Dicaprio and Oscars

- DESCRIPTION:
You have to write a function that describe Leo:

function leo(oscar) {

}
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"

- LABELS:
#FUNDAMENTALS

*/

function leo(oscar) {
  switch (oscar) {
    case 88:
      return "Leo finally won the oscar! Leo is happy";
    case 87:
      return "When will you give Leo an Oscar?";
    case 86:
      return "Not even for Wolf of wallstreet?!";
    default:
      return oscar > 88
        ? "Leo got one already!"
        : "When will you give Leo an Oscar?";
  }
}
