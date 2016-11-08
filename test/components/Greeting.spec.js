import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import jsdom from 'jsdom';
import { shallow } from 'enzyme';
import Greeting from '../../src/components/Greeting';

describe('<Greeting />', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Greeting name="Harambe"/>);
	});

	it('Should greet Harambe', () => {
		wrapper.find('p').text('Hola, Harambe!');
	});

})