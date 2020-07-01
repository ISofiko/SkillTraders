import React from 'react';
import Sidebar from '../components/Sidebar';
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
        this.setState({title: event.target.value});
    }

    handleLinkChange(event) {
        this.setState({title: event.target.value});
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
                    <form className='posting-details'>
                        <label> Posting title <br/> </label>
                        <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
                        <label> Categories: <br/> </label>

                        <label> Summary <br/> </label>
                        <input type="text" value={this.state.summary} onChange={this.handleSummaryChange}/>
                        <label> Meeting link <br/> </label>
                        <input type="text" value={this.state.link} onChange={this.handleLinkChange}/>
                        <input className="create" type="submit" value="Create!"/>
                    </form>
                </div>
            </div>
        </div>
        );
    }

}

export default CreatePosting;