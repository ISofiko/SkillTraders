import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './messages-subs.css'
const mockContacts = require('../../mockData/MockContacts')

class ContactList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: mockContacts
        }
    }

    render() {
        console.log(this.state.contacts)
        return (
            <div className='contacts-bar'>
                <div className="contacts-title">
                    Contacts
                </div>
                <ScrollToBottom className="contact-list">
                    {
                        this.state.contacts.map((contact, index) =>
                        <button className="contact">
                            {contact.name}
                        </button>)
                    }
                </ScrollToBottom>
            </div>
        )
    }
}

export default ContactList