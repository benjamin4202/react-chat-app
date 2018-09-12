import React from 'react';
import ChatInput from './ChatInput';
import Messages from './Messages';
import MessageService from './message_service.js';

class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: "",
            userTyping: "",
        }
    }

    //If the userTyping prop changes update the state
    componentDidUpdate(prevProps, prevState) {
        if ( prevProps.typingUser !== this.props.typingUser ) {
            this.setState( { userTyping: this.props.typingUser } ); 
            //Hide indicator if the user stops typing
            setTimeout(() => {
                this.setState( { userTyping: "" } ); 
            }, 5000);
              
        }
        this.scrollToBottom();
    }
    //Keep latest message at the bottom of the chat window
    scrollToBottom() {
        let userDiv = this.props.user + "-messages";
        const objDiv = document.getElementById(userDiv);
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    //Fetch which user is typing
    isTyping = (user) => {
        this.props.isTyping( MessageService.getTypingUsers() );
        this.setState( { userTyping: this.props.typingUser } );
    }

    render() {
        return(
            <div className="message-container">
                <div className="message-container-header">
                    <div className="message-user-img"><img src={"./img/" + this.props.user + ".png"} alt={this.props.user + "'s avatar"}/></div>
                </div>
                <div id={this.props.user + "-messages"} className="messages-window">
                    <Messages messages={this.props.messages} user={this.props.user} />
                </div>
                {/* eslint-disable */}
                <div className="indicator">
                    <div className={this.state.userTyping != this.props.user && this.state.userTyping != "" ? "typing":"hidden"}><img src="./img/typing.gif" alt={this.props.user + "is typing"}/></div>
                </div>
                <div className="input">
                    <ChatInput user={this.props.user} isTyping={this.isTyping} callback={this.props.callback}/>
                </div>
            </div>
        );
    }
}

export default Chat;