import React, { Component, PropTypes } from 'react';

class Child extends Component {

	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onClick();
	}

	render() {
		return(
			<button onClick={this.handleClick}>Click me</button>
		);
	}
}

export default Child;