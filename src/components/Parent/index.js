import React, { Component, PropTypes } from 'react';
import Child from '../Child';

class Parent extends Component {

	constructor() {
		super();
		this.state = { isChildComponentClicked: false };
	}

	render() {
		return(
			<div>
				<Child onClick={() => this.setState({isChildComponentClicked: true})}/>
			</div>
		);
	}
}

export default Parent;