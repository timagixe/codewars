/*

- TITLE:
Grasshopper - Create the rooms

- DESCRIPTION:
Escape the room
You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

- LABELS:
#FUNDAMENTALS

*/

function createRoom(
    { name, description, completed } = {
        name: "Default Room Name",
        description: "Default room description",
        completed: false
    }
) {
    return {
        name,
        description,
        completed
    };
}

const rooms = {
    firstRoom: createRoom(),
    secondRoom: createRoom(),
    thirdRoom: createRoom()
};
