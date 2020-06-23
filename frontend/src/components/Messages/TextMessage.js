import React from 'react';

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
            <div className='text-message'>
                <div className="{{getMessageSide()}}">
                this.state.content
                </div>
            </div>
        )
    }

}

export default TextMessage;