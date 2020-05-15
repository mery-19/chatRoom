// class to handle chat room
// setting up a real-time listener to get new chats
// updating the username
// updatign the room

class chatroom{
    constructor(room, username)
    {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');

    }
}

const chatroom = new chatroom('gaming',"mery");
console.log(chatroom,"hi");