import React, {Component} from 'react';
import {render} from 'react-dom';
import Foo from './components/Foo';

const app = (
	<Foo />
);

render(app, document.getElementById('app'));