import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import jsdom from 'jsdom';
import { mount } from 'enzyme';
import Parent from '../../src/components/Parent';
import Child from '../../src/components/Child';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('<Parent />', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = mount(<Parent />);
	});

	it('Should have a default state', () => {
		expect(wrapper.state().isChildComponentClicked).toBe(false);
	})

	it('Should have one child component', () => {
		expect(wrapper.containsMatchingElement(<Child />)).toBe(true);
		expect(wrapper.find('div').children().length).toEqual(1);
	});

	describe('<Child />', () => {

		let spy, wrapper, ChildElement;

		describe('#onClick', () => {
			before(() => {
				spy = sinon.spy(Child.prototype, 'handleClick');
				wrapper = mount(<Parent />);
				ChildElement = wrapper.find(Child);
			});

			it('Should change the parent\'s state', () => {
				expect(wrapper.state().isChildComponentClicked).toBe(false);
				ChildElement.simulate('click');
				expect(wrapper.state().isChildComponentClicked).toBe(true);
				expect(spy.called).toBe(true);
			});
		});

	});

})