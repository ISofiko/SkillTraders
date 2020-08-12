import React from 'react';
import { uid } from "react-uid";
import './style.css';
import ScrollToBottom from 'react-scroll-to-bottom';

class Console extends React.Component {
	state = {
		command: "",
		log: [
			"[INFO] Example command output",
			"[INFO] Yet another example command output",
			"[INFO] Example command output",
			"[INFO] Yet another example command output",
			"[INFO] Example command output",
			"[INFO] Yet another example command output",
			"[INFO] Example command output",
			"[INFO] Yet another example command output",
			"[INFO] Example command output",
			"[INFO] Yet another example command output",
			"[INFO] Example command output",
			"[INFO] Yet another example command output",
			"[INFO] Example command output",
			"[INFO] Yet another example command output",
			"[INFO] Example command output",
			"[INFO] Yet another example command output",
			"[INFO] Example command output",
			"[INFO] Yet another example command output",
			"[INFO] Example command output",
			"[INFO] Yet another example command output"
		]
	};

	controlInput = event => {
		this.setState({
			command: event.target.value,
		});
	};

	enterListener = event => {
		if (event.key === "Enter") {
			this.setState({
				log: this.state.log.concat("[CMD] " + this.state.command),
				command: ""
			});
		}
	};

	render() {
		const { style } = this.props;

		return (
			<div className="console" style={style}>
				<ScrollToBottom className="log">
					{this.state.log.map(msg => (
						<p>{msg}</p>
					))}
				</ScrollToBottom>
				<input className="command-bar" placeholder="Enter a command" value={this.state.command} onChange={this.controlInput} onKeyDown={this.enterListener}></input>
				<h2 className="blinking-arrow">></h2>
				<h2 className="console-title">Console</h2>
			</div>
		);
	}
}

export default Console;