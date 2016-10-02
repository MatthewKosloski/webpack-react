import React, { Component } from 'react';
import s from './style';

export default class Foo extends Component {
	render() {
		return(
			<div className={`${s.container}`}>
				<h1>Foo</h1>
				<p>This is a paragraph</p>
			</div>
		);
	}
}