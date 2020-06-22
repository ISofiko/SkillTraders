import React from 'react';
import './messages.css';
import ContactList from '../components/Messages/ContactList';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.postMessage = this.postMessage.bind(this)
        this.getMessages = this.getMessages.bind(this)

        this.state = {
            messages: [],
            personSending: props.personSending,
            personReceiving: props.personReceiving
        }
    }

    postMessage(message) {
        let messages = this.state.messages
        messages.push(post)
        this.setState(messages)
    }

    render() {
        return (
            <div className="sidebar"/>
            <div className="messages">
                <ContactList contacts={[]} />
                <ChatSpace messages={this.state.messages} />
            </div>
        );
    }
}

export default Dashboard;