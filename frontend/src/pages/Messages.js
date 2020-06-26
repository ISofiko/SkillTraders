import React from 'react';
import ContactList from '../components/Messages/ContactList';
import ChatSpace from '../components/Messages/ChatSpace'
import Sidebar from '../components/Sidebar';
var mockMessages = require('../mockData/MockMessages')

require('./Messages.css');
require('./Dashboard.css');

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: mockMessages,
            personSending: props.personSending,
            personReceiving: props.personReceiving
        }
    }

    postMessage(message) {
        let messages = this.state.messages
        messages.push(message)
        this.setState(messages)
    }

    render() {
        return (
        <div className="main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="messages-main">
                <ContactList contacts={[]} />
                <ChatSpace messages={this.state.messages} />
                <form action="" className="send-message">
                    <input
                        type="text"
                        id="messageText"
                        placeholder= "Say something"
                        className="say-something"/>
                    <input className="send-button" type="submit" value="Send"/>
                </form>
            </div>
        </div>
        );
    }
}

export default Messages;