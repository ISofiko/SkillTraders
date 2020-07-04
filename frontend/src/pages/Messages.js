import React from 'react';
import StyledButton from '../components/StyledButton'
import ContactList from '../components/Messages/ContactList';
import ChatSpace from '../components/Messages/ChatSpace'
import Sidebar from '../components/Sidebar';
const mockContacts = require('../mockData/MockContacts')

require('./Messages.css');
require('./Dashboard.css');

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: mockContacts,
            messages: mockContacts[0].messages,
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
                <ContactList contacts={this.state.contacts} />
                <ChatSpace messages={this.state.messages} />
                <form action="" className="send-message">
                    <input
                        type="text"
                        id="messageText"
                        placeholder= "Say something"
                        className="say-something"/>

                    <StyledButton
                        innerclass="send-button"
                        text="Send"
                        onClick={() => { console.log("message sent") }}>>
                    </StyledButton>
                </form>
            </div>
        </div>
        );
    }
}

export default Messages;