import React, { Fragment } from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { uid } from "react-uid";
import Sidebar from '../components/Sidebar';
import StyledButton from '../components/StyledButton'
import Category from '../components/FindPosting/Category';
import ScrollToBottom from 'react-scroll-to-bottom';
import upload from "../resources/upload.png";
import edit from "../resources/edit.png";
import save from "../resources/save.png";
import template from "../resources/templateposting.png";
import { getCategories } from './../actions/categories';
//var mockCategories = require('../mockData/MockPostingCategories')

require('./CreatePosting.css')
require('./Dashboard.css');

function createPosting() {
    // front end animation
    const createbox = document.getElementsByClassName("posting-details")[0];
    createbox.style.WebkitAnimation = "upload 2.3s forwards";
    const after = document.getElementById("afterthought");
    after.style.display = "block";
    after.style.WebkitAnimation = "fade-in 2.5s forwards";

}

function checkSessions(sessions) {
    if (sessions > 900) {
        return "Ongoing";
    }
    else return sessions;

    // MAKE SURE TO HANDLE THIS IN DB
}

function checkPrice(price) {
    if (price < 1) {
        return "Free";
    }
    return "$" + price;

    // MAKE SURE TO HANDLE THIS IN DB
}

class CreatePosting extends React.Component {

    componentDidMount() {
        getCategories(this)
        console.log(this.state)
    }

    constructor(props) {
        super(props);

        // we will replace mock categories with those stored in server
        this.state = {
            title: '',
		    tags: [],
            categories: [],
            summary: '',
            link: '',
            numSessions: 1,
            price: 0,
            photo: null
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handlePhotoChange = this.handlePhotoChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleNumSessionsChange = this.handleNumSessionsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changePhoto = this.changePhoto.bind(this);
      }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handlePhotoChange(event) {
        this.setState({photo: event});
    }

    changePhoto(event) {
        let preview = document.getElementById("innerpicture");
        let file    = document.getElementById("file-input-posting").files[0];
        let reader  = new FileReader();
      
        reader.onloadend = function () {
          preview.src = reader.result;
        }
        console.log(file);
        if (file) {
          reader.readAsDataURL(file);
        } else {
          preview.src = "";
        }

        // sending photo file over to state to be saved to db eventually -- WIP
        this.handlePhotoChange(file);
    }

    handleSummaryChange(event) {
        this.setState({summary: event.target.value});
    }

    handlePriceChange(event) {
        this.setState({price: event.target.value});
    }

    handleNumSessionsChange(event) {
        this.setState({numSessions: event.target.value});
    }

    // we will handle the real implementation for creating a posting through the server
    handleSubmit(event) {
        console.log('A posting was made: ' + this.state.value);
        // DB code goes here -> uploading
        // first check if all fields are full and not empty

        // DB - ONGOING SESSIONS ARE those >=900 number of sessions

        createPosting(); // call asynch animation
        event.preventDefault();
    }

    setTag = event => {
    		const tag = event.target.innerText.toLowerCase();
    		if (!this.state.tags.includes(tag)) {
    			this.setState({
    				tags: this.state.tags.concat(tag)
    			});
    			event.target.style = "background-color: #5ac7c7;";
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
                    <h1>Create a new Skill Posting</h1>
                    <ScrollToBottom>
                    <form className='posting-details'>
                        <div>
                            <br/>
                            <div className="imageareaposting">
						        <img id="innerpicture" src={template}></img>
                            </div>
                            <div className="buttonareaposting">
                            <label for="file-input-posting" class="custom-file-upload"> Choose Picture</label>
                                <input id="file-input-posting" ref={input => this.inputElement = input} type="file" accept=".png, .jpeg, .jpg" name="name" onChange={this.changePhoto} />
                            </div>
                        </div><br/>
                        <label> Posting Title <br/> </label>
                        <input class="input" type="text" id="postingtitle" value={this.state.title} onChange={this.handleTitleChange}/><br/>
                        <label> Select applicable categories <br/> </label>

                        <div className="categories-bars">
                                {this.state.categories.map(category => (
                                <Category key={uid(category)} title={category.name} icon={category.icon} click={this.setTag} />
                            ))}
                        </div><br/>

                        <label> Description <br/> </label>
                        <textarea class="input"
                            className='summary'
                            type="text"
                            id="summary"
                            value={this.state.summary}
                            onChange={this.handleSummaryChange}/><br/>
                        <label> {'Price (per session): ' + checkPrice(this.state.price)} <br/> </label>
                        <input class="slider" type="range" min="0" max="1000" placeholder={0} value={this.state.price} onChange={this.handlePriceChange}/><br/>

                        {/* this slider is not working, might try to fix in the future
                        <Slider class='slider'
                            axis="x"
                            xstep={1}
                            xmin={0}
                            xmax={100}
                            numSessions={this.state.numSessions}
                            onChange={({ x }) => this.setState({ numSessions: parseFloat(x.toFixed(2)) })}
                          />
                         */}
                        <label> {'Number of sessions: ' + checkSessions(this.state.numSessions)} </label>
                        <input class="slider" type="range" min="1" max="1000" placeholder={1} value={this.state.numSessions} onChange={this.handleNumSessionsChange}/>

                         {/*
                          <Slider class='slider'
                            axis="x"
                            xstep={1}
                            xmin={0}
                            xmax={20}
                            numSessions={this.state.numSessions}
                            onChange={({ x }) => this.setState({ numSessions: parseFloat(x.toFixed(2)) })}
                          />
                          */}
                        <br/><br/>
                        <StyledButton
                            id="create-posting"
                            innerclass="create-button"
                            innericon={upload}
                            text="Create Posting"
                            onClick={this.handleSubmit}>
                        </StyledButton>

                    </form>
                    <div id="afterthought"><h2>Thank You</h2><br/><a>Your post has been submitted</a></div>
                    </ScrollToBottom>
                </div>
            </div>

        </div>
        );
    }

}

export default CreatePosting;