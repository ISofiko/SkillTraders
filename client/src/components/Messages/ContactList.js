import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './messages-subs.css'
//const mockContacts = require('../../mockData/MockContacts')

class ContactList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: props.contacts
        }
    }

    render() {
        return (
            <div className='contacts-bar'>
                <div className="contacts-title">
                    Contacts
                </div>
                <ScrollToBottom className="contact-list">
                    {
                        this.state.contacts.map((contact, index) =>
                        <button className="contact" key={index}>
                            {contact.name}
                        </button>)
                    }
                </ScrollToBottom>
            </div>
        )
    }
}

export default ContactList