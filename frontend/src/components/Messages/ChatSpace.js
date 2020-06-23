import React from 'react'
import './messages-main.css'
import TextMessage from './TextMessage';

class ChatSpace extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: this.props.messages
        }
    }

    render() {
        return (
            <div className='chat-space'>
                {
                    this.props.messages.map((message, index) =>
                    <TextMessage
                        key={index}
                        content={message.content}
                        sender={message.sender}
                    />)
                }
            </div>
        )
    }
}

export default ChatSpace;