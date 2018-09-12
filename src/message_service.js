/* Message Service  */

let messages = [];
let usersTyping = [];

//Fetch all Messages in the messages array
function fetchMessages() {
    //This could fetch the previous messages from a DB or other API
    return messages;
}

//Send a message to the messages array
function sendMessage(message) {
    //This could send a message via a socket or to a DB or API
    messages.push(message);
    return messages;
}

//Insert which user is typing into the usersTyping array
function isTyping(user) {
    usersTyping = [];
    usersTyping.push(user);
    return usersTyping;
}

//Return which user is currently typing
function getTypingUsers() {
    return usersTyping;
}

module.exports = {
    fetchMessages: fetchMessages,
    sendMessage: sendMessage,
    isTyping: isTyping,
    getTypingUsers: getTypingUsers,
}