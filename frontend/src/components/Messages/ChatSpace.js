import React from 'react'
import './messages-subs.css'
import TextMessage from './TextMessage';
import ScrollToBottom from 'react-scroll-to-bottom';

class ChatSpace extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: this.props.messages
        }
    }

    render() {
        return (
            <div>
                <div className="selected-contact">
                    Alice Alison
                </div>
                <ScrollToBottom className='chat-space'>
                    {
                        this.state.messages.map((message, index) =>
                        <TextMessage
                            key={index}
                            content={message.content}
                            sender={message.sender}
                        />)
                    }
                </ScrollToBottom>
            </div>
        )
    }
}

export default ChatSpace;