import React from 'react';
import StyledButton from '../components/StyledButton'
import ContactList from '../components/Messages/ContactList';
import ChatSpace from '../components/Messages/ChatSpace'
import Sidebar from '../components/Sidebar';
import { useLocation } from 'react-router-dom';
import ScrollToBottom from 'react-scroll-to-bottom';
const axios = require("axios");
//const mockContacts = require('../mockData/MockContacts')

require('./Messages.css');
require('./Dashboard.css');

class Messages extends React.Component {
    constructor(props) {
        super(props);

        const getPersonSending = () => {
            return "5f2ca2530a241c23501702c5";
        };

        const getConversations = () => {
            this.conversations = axios.get("/api/conversations/");
        };

        const getContacts = () => {
            return [{name: "David"}];
        };

        this.state = {
            message: "",
            conversations: [],
            contacts: getContacts(),
            messages: [],
            personSending: String(window.localStorage.getItem("SkillTraders2020!Admin")),
            personReceiving: String(!window.localStorage.getItem("SkillTraders2020!Admin"))
        };
    }

    componentDidMount() {
        this.socket = require("socket.io-client")("http://localhost:5000");
        this.socket.on("message", (message) => {
            if (message.receiver === this.state.personSending) {
                this.setState({
                    messages: this.state.messages.concat(message)
                });
            }
        });
    }

    sendMessage(event) {
        event.preventDefault();
        const message = {
            content: this.state.message,
            sender: this.state.personSending,
            receiver: this.state.personReceiving
        };
        this.setState({
            message: "",
            messages: this.state.messages.concat(message)
        });
        this.socket.emit("message", message);
        console.log(this.state.messages);
    }

    controlInput(event) {
        this.setState({
            message: event.target.value
        });
    }

    render() {
        return (
        <div className="main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="messages-main">
                <ContactList contacts={this.state.contacts} />
                <div>
                    <div className="selected-contact">
                        Alice Alison
                    </div>
                    <ScrollToBottom className='chat-space'>
                        {
                            this.state.messages.map((message, index) =>
                            <div className={message.sender + " me"} key={index}>
                                <div className='text-message'>{message.content}</div>
                            </div>
                            )
                        }
                    </ScrollToBottom>
                </div>
                <form action="" className="send-message">
                    <input
                        type="text"
                        id="messageText"
                        placeholder= "Say something"
                        value={this.state.message}
                        className="say-something"
                        onChange={this.controlInput.bind(this)}
                    />
                    <StyledButton
                        innerclass="send-button"
                        text="Send"
                        onClick={this.sendMessage.bind(this)}>
                    </StyledButton>
                </form>
            </div>
        </div>
        );
    }
}

export default Messages;