import React from 'react';
import './messages-subs.css'

function ContactList() {

    return (
        <div className='contact-list'>
            <div className="contacts-title">
                Contacts
            </div>
            <button className="contact">
                Alice Alison
            </button>
            <button className="contact">
                Muhammad Ali
            </button>
            <button className="contact">
                David Chen
            </button>
            <button className="contact">
                Sofia Ilina
            </button>
        </div>
    )
}

export default ContactList