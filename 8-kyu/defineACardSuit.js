/*

- TITLE:
Define a card suit

- DESCRIPTION:
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

- LABELS:
#FUNDAMENTALS #STRINGS

*/

const SUITS = {
  "♣": "clubs",
  "♦": "diamonds",
  "♥": "hearts",
  "♠": "spades"
};

function defineSuit(card) {
  const suit = card[card.length - 1];
  return SUITS[suit];
}
