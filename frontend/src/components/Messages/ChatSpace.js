import React from 'react'
import 'messages-main.css'

class ChatSpace extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            this.messages = this.props.messages
        }
    }

    render() {
        return (
            <div className='chat-space'>
                {
                    this.props.messages.map(message, index) =>
                    <TextMessage
                        key={index}
                        content={message.content}
                }
            </div>
        )
    }
}