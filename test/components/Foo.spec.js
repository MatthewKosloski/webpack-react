import React from 'react';
import jsdom from 'jsdom'
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { shallow } from 'enzyme';
import Foo from '../../src/components/Foo';

// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.document = doc;
// global.window = doc.defaultView;


describe('<Foo />', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Foo />);
	});

	it('Should have 4 children', () => {
		expect(wrapper.children().length).toEqual(4);
	});

	it('Should respond to mouseOver()', () => {
		expect(wrapper.state().isOverComponent).toBeFalsy();
		wrapper.simulate('mouseOver');
		expect(wrapper.state().isOverComponent).toBeTruthy();
	});

	describe('button', () => {
		it('Should increment the state', () => {
			expect(wrapper.state().increment).toEqual(0);
			wrapper.find('button').simulate('click');
			expect(wrapper.state().increment).toEqual(1);
		});
	});


});