import React from 'react';
import './style.css';

class Category extends React.Component {
	render() {
		const { title, icon, click } = this.props;

		return (
			<div className="category" onClick={click}>
				<h1>{title}</h1>
				<span className={"fa fa-" + icon}></span>
			</div>
		);
	}
}

export default Category;