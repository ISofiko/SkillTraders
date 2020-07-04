import React, { Fragment } from 'react';
import Slider from '@material-ui/core/Slider';
import { uid } from "react-uid";
import Sidebar from '../components/Sidebar';
import StyledButton from '../components/StyledButton'
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
            numSessions: 1,
            price: 0
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

                        <div className="categories-bars">
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
                        <label> {'Price per session: $' + this.state.price} <br/> </label>
                        <Slider class='slider'
                            axis="x"
                            xstep={1}
                            xmin={0}
                            xmax={100}
                            numSessions={this.state.numSessions}
                            onChange={({ x }) => this.setState({ numSessions: parseFloat(x.toFixed(2)) })}
                          />
                        <label> {'Number of sessions: ' + this.state.numSessions} </label>

                          <Slider class='slider'
                            axis="x"
                            xstep={1}
                            xmin={0}
                            xmax={20}
                            numSessions={this.state.numSessions}
                            onChange={({ x }) => this.setState({ numSessions: parseFloat(x.toFixed(2)) })}
                          />

                    </form>
                        <StyledButton
                            id="create-posting"
                            innerclass="create-button"
                            text="Create Posting!"
                            onClick={() => { console.log("posting created!") }}>>
                        </StyledButton>
                    </ScrollToBottom>
                </div>
            </div>
        </div>
        );
    }

}

export default CreatePosting;