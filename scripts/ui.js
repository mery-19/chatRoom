// Render chat templates to the DOM
// clear the list of chats (when the room changes)

class ChatUI {
    constructor(list)
    {
        this.list = list;
    }
// generate html template (this is the callback methode that we used in the chatRoom class)
    render(data)
    {
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {
                addSuffix:true
            }
            );
        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
        `;

        this.list.innerHTML += html;

    }
}