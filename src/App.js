import React, { Component } from 'react';
import './App.css';
import MessageService from './message_service.js';

import Chat from './Chat';

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      user: ""
    };
  }
  
  //Add Message 
  addMessage = (message) => {
    if (message.message === ''){
      return;
    }
    let updatedMessages = MessageService.sendMessage(message);
    this.setState({messages: updatedMessages, user: ""});
    MessageService.isTyping("");
  }
  
  //Check which user is typing
  isTyping = (user) => {
    this.setState({user: user});
  }

  render() {
    return (
      <div className="app-container">
        <Chat messages={this.state.messages} user="Laura" isTyping={this.isTyping} typingUser={this.state.user} callback={this.addMessage}/>
        <Chat messages={this.state.messages} user="Rob" isTyping={this.isTyping} typingUser={this.state.user} callback={this.addMessage}/>
      </div>
    );
  }
}

export default App;
