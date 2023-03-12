/*

- TITLE:
The Arpeggiator

- DESCRIPTION:
In music, a scale is made up of seven different values (A through G inclusive) with the ROOT value occuring twice forming the scale's first and eighth (last) note.

So if the root = B, the scale looks like this:

  B C D E F G A B
  
and if the root = F, the scale looks like this:

  F G A B C D E F
  
Each scale has an arpeggio made up of it's first, third, fifth and eighth notes.

So the arpeggio for scale root B looks like this:

 B D F B
 
and the arpeggio for scale root F looks like this:

 F A C F
 
Write a programme that takes any possible root note and returns it's arpeggio in an array. If the object input isn't a root note, return 'undefined/Nothing'. Watch for capitalization!

Example:

arpeggio("A") == ["A", "C", "E", "A"]
arpeggio("E") == ["E", "G", "B", "E"]
arpeggio("Z") == undefined
arpeggio("a") == undefined

- LABELS:
#FUNDAMENTALS

*/

function arpeggio(note) {
  if (!isValidNote(note)) return undefined;
  const scale = getScaleForNote(note);
  return getArpeggioNotes(scale);
}

const SCALE = "ABCDEFG";

function isValidNote(note) {
  return SCALE.indexOf(note) >= 0;
}

function getScaleForNote(note) {
  const [leftPart, rightPart] = SCALE.split(note);
  return [note, rightPart, leftPart, note].join("");
}

const ARPEGGIO_NOTE_INDEXES = [0, 2, 4, 7];

function getArpeggioNotes(scale) {
  return ARPEGGIO_NOTE_INDEXES.map((noteIndex) => scale[noteIndex]);
}
