import React from 'react';
import './style.css';
import Placeholder from '../../resources/placeholder.jpg';

class User extends React.Component {
	render() {
		const { name, avatar, link } = this.props;

		return (
			<div className="user">
				<img src={Placeholder} alt="Placeholder" />
				<div className="details">
					<h1>{name}</h1>
					<div className="actions">
						<a class="fa fa-pencil"></a>
						<a class="fa fa-trash"></a>
					</div>
				</div>
			</div>
		);
	}
}

export default User;