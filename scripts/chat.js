// class to handle chat room *checked*
// setting up a real-time listener to get new chats
// updating the username
// updatign the room

class Chatroom{
    constructor(room, username)
    {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub

    }

    async addChat(message)
    {
        // format a chat object
        const now =  new Date();
        const chat = {
            message,
            username:this.username,
            room:  this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }; 

        // save the chat element
        const respose = await this.chats.add(chat);
        return Response;

    }



    getChats(Callback)
    {
       this.unsub = this.chats
            .where('room', '==',this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach( change => {
                    if(change.type ==="added")
                    {
                        Callback(change.doc.data());
                    }
                })
            });
    }

    updateName(username)
    {
        this.username=username;
    }

    updateRoom(room)
    {
        this.room=room;
        console.log('room updated');
        if(this.unsub)
            {this.unsub();
                            }   
 }
}

const chatroom = new Chatroom('general',"mery");

// chatroom.addChat("hello everyone")
//     .then(() => console.log("chat added"))
//     .catch(err => console.log(err));

chatroom.getChats((data) => {
    console.log(data)
});
// annulate the user change the room after a few seconds
setTimeout(() => {
    chatroom.updateRoom('gaming');
    chatroom.updateName('fadi');
    chatroom.getChats((data) => {
        console.log(data)
    });
    chatroom.addChat('hello');
}, 3000);

