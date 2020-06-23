import React from 'react';
import ContactList from '../components/Messages/ContactList';
import ChatSpace from '../components/Messages/ChatSpace'

require('./messages.css');

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
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
            <div className="dashboard">
                <div className="sidebar"/>
                <div className="messages">
                    <ContactList contacts={[]} />
                    <ChatSpace messages={this.state.messages} />
                </div>
            </div>
        );
    }
}

export default Messages;