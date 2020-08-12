import React from 'react';
import './messages-subs.css'

class TextMessage extends React.Component {

    constructor(props) {
            super()
            this.state = {
                sender: props.sender,
                content: props.content
            }
            this.signedInUser = "Bob"
        }

    getMessageSide() {
        if (this.state.sender == this.signedInUser) return "me";
        else return "other"
    }

    render() {
        return (
            <div className={this.getMessageSide()}>
                <div className='text-message'>
                {this.state.content}
                </div>
            </div>
        )
    }

}

export default TextMessage;