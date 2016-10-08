import React, { Component, PropTypes } from 'react';

class Button extends Component {

	constructor() {
		super();
		this.state = {
			isClicked: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({isClicked: true});
	}

	render() {
		return(
			<button onClick={this.handleClick}>Click me</button>
		);
	}
}

export default Button;