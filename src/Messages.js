import React from 'react';
import './Messages.css';



class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        };
    }
    render() {
        return(
            <div className="message-window">
                {this.props.messages.map((message, i) => {
                    return <div className="bubble-row" key={i}><div className={message.user === this.props.user ? "user-img me" : "user-img you"}><img src={"./img/" + message.user + ".png"} alt={this.props.user + "'s avatar'"}/></div><div className={message.user === this.props.user ? "bubble me":"bubble you"}>{message.message}</div></div>
                })}
            </div>
        );
    }
}

export default Messages;

