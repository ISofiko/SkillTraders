import React from 'react';
import { uid } from "react-uid";
import Sidebar from '../components/Sidebar';
import Category from '../components/FindPosting/Category';
import ScrollToBottom from 'react-scroll-to-bottom';
var mockCategories = require('../mockData/MockPostingCategories')

require('./CreatePosting.css')
require('./Dashboard.css');


class CreatePosting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
		    tags: [],
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

    setTag = event => {
    		const tag = event.target.innerText.toLowerCase();
    		if (!this.state.tags.includes(tag)) {
    			this.setState({
    				tags: this.state.tags.concat(tag)
    			});
    			event.target.style = "background-color: #64E1E1;";
    			event.target.children[0].style = "text-decoration: underline;";
    		} else {
    			this.setState({
    				tags: this.state.tags.filter(x => x != tag)
    			});
    			event.target.style = "";
    			event.target.children[0].style = "";
    		}
    	};


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

                        <div className="categories">
                            {this.state.categories.map(category => (
                                <Category
                                    key={uid(category)}
                                    title={category.title}
                                    icon={null}
                                    click={this.setTag} />
                            ))}
                        </div>

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