import React from 'react';
import StyledButton from '../components/StyledButton'
import ContactList from '../components/Messages/ContactList';
import Sidebar from '../components/Sidebar';
import { useLocation } from 'react-router-dom';
import ScrollToBottom from 'react-scroll-to-bottom';
import ProfileImage from '../components/ProfileImage';
import tempProfile from '../resources/templateposting.png';

const axios = require("axios");
const serverURL = "http://localhost:5000";

require('./Messages.css');
require('./Dashboard.css');

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.user = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"));

        this.state = {
            message: "",
            conversations: [],
            contacts: [],
            messages: [],
            conversation: null,
            personSending: this.user,
            personReceiving: { fname: "Connecting", lname:"..." }
        };
    }

    async getMessages() {
        await axios.get(serverURL + "/api/messages/" + this.state.conversation._id).then((result) => {
            this.setState({
                messages: result.data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
            });
        });
    }

    componentDidMount() {
        this.socket = require("socket.io-client")(serverURL);
        this.socket.on("message", (message) => {
            if (message.receiver === this.state.personSending.id && message.sender === this.state.personReceiving._id) {
                this.setState({
                    messages: this.state.messages.concat(message)
                });
            }
        });

        const init = async () => {
            const getConversations = async () => {
                await axios.get(serverURL + "/api/conversations/" + this.user.id).then((result) => {
                    this.conversations = result.data;
                });
            };
            await getConversations();
            const uids = [];
            this.conversations.forEach((conversation) => {
                uids.push(conversation.participants.filter((participant) => participant != this.user.id));
            });
            let contacts = [];
            uids.forEach(async (uid) => {
                await axios.get(serverURL + "/api/user/" + uid[0]).then((result) => {
                    contacts.push(result.data);
                    if (contacts.length === uids.length) {
                        const update = async () => {
                            this.setState({
                                contacts: contacts,
                                personReceiving: contacts[0],
                                conversation: this.conversations.filter((conversation) => conversation.participants.includes(contacts[0]._id))[0]
                            });
                        };
                        update().then(() => {
                            this.getMessages();
                        });
                    }
                }); // Does not handle group chats yet
            });
        };
        init().then(() => {
            document.querySelector("#messageText").disabled = false;
        });
    }

    sendMessage(event) {
        event.preventDefault();
        const message = {
            content: this.state.message,
            sender: this.state.personSending.id,
            receiver: this.state.personReceiving._id
        };
        this.setState({
            message: "",
            messages: this.state.messages.concat(message)
        });
        this.socket.emit("message", message);
        
        axios.post(serverURL + "/api/messages/" + this.state.conversation._id, message).then((result) => {
            console.log(result)
        });
    }

    controlInput(event) {
        this.setState({
            message: event.target.value
        });
    }

    selectContact(event) {
        const select = async () => {
            const username = event.target.innerText;
            const contact = this.state.contacts.filter((contact) => contact.username === username)[0];
            const conversation = this.conversations.filter((conversation) => conversation.participants.includes(contact._id))[0];
            this.setState({
                conversation: conversation,
                personReceiving: contact
            });
        }
        select().then(() => {
            this.getMessages();
        });
    }

    setMessageStyle(message) {
        if (message.sender === this.state.personSending.id) {
            return "me";
        } else {
            return "other";
        }
    }

    setMessagePicture(avatar) {
        if (avatar == null) {
            return tempProfile;
        }
        return avatar;
    }

    render() {
        return (
        <div className="main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="messages-main">
                <div className='contacts-bar'>
                    <div className="contacts-title">
                        Contacts
                    </div>
                    <ScrollToBottom className="contact-list">
                        {
                            this.state.contacts.map((contact, index) =>
                            <button className="contact" key={index} onClick={this.selectContact.bind(this)}>
                                @{contact.username}
                            </button>)
                        }
                    </ScrollToBottom>
                </div>
                <div>
                    <div className="selected-contact">
                        <ProfileImage self="false" className="messages-logo" src={this.setMessagePicture(this.state.personReceiving.avatar)} uid={this.state.personReceiving._id}></ProfileImage>
                        <a className="selected-contact-name" href={"/userprofile?uid=" + this.state.personReceiving._id}>{this.state.personReceiving.fname} {this.state.personReceiving.lname}</a>
                        <a className="selected-contact-time">Last Seen: {String(new Date(this.state.personReceiving.lastSeen)).split(" ").splice(1, 3).join(" ")}</a>
                    </div>
                    <ScrollToBottom className='chat-space'>
                        {
                            this.state.messages.map((message, index) =>
                            <div className={this.setMessageStyle(message)} key={index}>
                                <div className='text-message'>{message.content}</div>
                            </div>
                            )
                        }
                    </ScrollToBottom>
                </div>
                <form action="" className="send-message">
                    <input
                        autoComplete="off"
                        type="text"
                        id="messageText"
                        placeholder= "Say something"
                        value={this.state.message}
                        className="say-something"
                        onChange={this.controlInput.bind(this)}
                        disabled
                    />
                    <button
                        className="send-button"
                        onClick={this.sendMessage.bind(this)}> Send
                    </button>
                </form>
            </div>
        </div>
        );
    }
}

export default Messages;