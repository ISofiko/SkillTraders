import React from 'react';
import './style.css';

class Category extends React.Component {
	render() {
		const { title, icon, link } = this.props;

		return (
			<a href={link} className="category">
				<h1>{title}</h1>
				<span className={"fa fa-" + icon}></span>
			</a>
		);
	}
}

export default Category;