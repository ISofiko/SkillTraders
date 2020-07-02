import React from 'react';
import Sidebar from '../components/Sidebar';
import ScrollToBottom from 'react-scroll-to-bottom';
var mockCategories = require('../mockData/MockPostingCategories')

require('./CreatePosting.css')
require('./Dashboard.css');


class CreatePosting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            categories: mockCategories,
            summary: '',
            link: '',
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleSummaryChange(event) {
        this.setState({summary: event.target.value});
    }

    handleLinkChange(event) {
        this.setState({link: event.target.value});
    }

    handleSubmit(event) {
        console.log('A posting was made: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
        <div>
            <div className='sidebar'>
                <Sidebar/>
            </div>
            <div className='main'>
                <div className='new-posting'>
                    <h1>Create a new Posting</h1>
                    <ScrollToBottom>
                    <form className='posting-details'>
                        <label> Posting title <br/> </label>
                        <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
                        <label> Categories: <br/> </label>

                        <label> Summary <br/> </label>
                        <textarea
                            className='summary'
                            type="text"
                            id="summary"
                            value={this.state.summary}
                            onChange={this.handleSummaryChange}/>
                        <label> Meeting link <br/> </label>
                        <input type="text" value={this.state.link} onChange={this.handleLinkChange}/>
                        <div className="button-container">
                            <input className="create-button" type="submit" value="Create!"/>
                        </div>
                    </form>
                    </ScrollToBottom>
                </div>
            </div>
        </div>
        );
    }

}

export default CreatePosting;