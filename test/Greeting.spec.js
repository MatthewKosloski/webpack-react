import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Greeting from '../../src/components/Greeting';

describe('<Greeting />', () => {

	let wrapper;

	before(() => {
		wrapper = shallow(<Greeting name="Matthew"/>);
	});

	it('Should have a div wrapped around a paragraph', () => {
		expect(wrapper.find('p').parent().is('div')).toBe(true);
	});

	it('Should render a correct greeting with props.name', () => {
		expect(wrapper.instance().props.name).toBe('Matthew');
		expect(wrapper.find('p').text()).toBe('Hello, Matthew.');
	})
})