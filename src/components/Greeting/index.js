import React, { Component, PropTypes } from 'react';

class Greeting extends Component {
	render() {
		const { name } = this.props;
		return(
			<div>
				<p>Hello, {name}.</p>
			</div>
		);
	}
}

export default Greeting;