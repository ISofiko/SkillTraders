import React from 'react';
import './Landing.css';
import Loginbox from '../components/Loginbox/index.js';

function Landing() {
	return (
		<div className="landing">
			<div className="overlay">
				<div className="card">
					<h1><span className="dark-aqua">Skill</span><span className="light-aqua">Traders</span></h1>
					<br/>
					<div className="sign-in">
						<Loginbox></Loginbox>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
