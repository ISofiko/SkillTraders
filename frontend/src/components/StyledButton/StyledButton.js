import React from 'react';
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import { uid } from "react-uid";
import './style.css';

class StyledButton extends React.Component {

        constructor(props){
                super(props);
        }

	render() {
		return (
            <div className="styledbutton" id={this.props.id}>
                    <button id="buttonstyledinitial" onClick={this.props.onClick}>{this.props.text}
                            <img id="buttoniconimg" src={this.props.innericon}></img>
                    </button>
            </div>
		);
	}
}

export default StyledButton;