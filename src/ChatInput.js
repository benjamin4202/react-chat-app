import React from 'react';
import MessageService from './message_service.js';


class ChatInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }
    }

    //Get the value from the input box and send it to the "addMessage" method
    handleTextInput = () => {
        let message = {
            "user": this.state.user,
            "message": this.myInput.value
        }
        this.props.callback(message);
        this.myInput.value = '';    
    }

    //Change which user is typing when they type in the input box
    onKeyPressed = (e) => {
        this.props.isTyping(this.state.user);
        MessageService.isTyping(this.state.user);

        if(e.key === 'Enter') {
            this.handleTextInput();
        }
    }

    render() {
        return(
            <div className="chat_input">
                <input type="text" placeholder="Type your message here..." ref={input => {this.myInput = input;}} onKeyDown={this.onKeyPressed}/>
                <button onClick={this.handleTextInput}>Send</button>
            </div>
        );
    }
}

export default ChatInput;