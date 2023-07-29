/*

- TITLE:
Parsing Commandline Arguments

- DESCRIPTION:
We're given some typical *nix commands and want to parse them into their arguments. We'll ignore quoted arguments and other special characters, although if any of the characters &, ;, >, | show up, those signify that a new command has started (so we can ignore any arguments after it).

##Examples

ls -R / ["ls", "-R", "/"]

   cat   /tmp/data.txt | less

  ["cat", "/tmp/data.txt"]
(note that we ignored the extra leading spaces on that last example)

- LABELS:
#PARSING #REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

const NEW_COMMAND_REGEXP = /(?![^;>|&])/g;

function args(cmd) {
    const command = cmd.split(NEW_COMMAND_REGEXP)[0];
    return command.trim().split(" ");
}
