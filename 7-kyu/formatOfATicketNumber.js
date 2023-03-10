/*

- TITLE:
Format of a ticket number

- DESCRIPTION:
Rules
You must check if some ticket numbers are valid. To be valid, a ticket number must :

Contain exactly 6 characters
Contain : one letter then one digit then 4 letters
'letter' means a single character, unaccented, uppercase or lowercase, between a and z.

Input arguments
tickets : an array of string, representing ticket numbers
Return value
An integer representing the number of valid ticket numbers.

- LABELS:
#REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

const TICKET_REGEXP = /^[a-z][0-9][a-z]{4}$/i;

function nbrValidTickets(tickets) {
  return tickets.reduce((count, ticket) => {
    if (TICKET_REGEXP.test(ticket)) return (count += 1);
    return count;
  }, 0);
}
