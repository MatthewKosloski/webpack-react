import React, {Component} from 'react';
import {render} from 'react-dom';
import Greeting from './components/Greeting';

const app = (
	<Greeting name="Matthew" />
);

render(app, document.getElementById('app'));