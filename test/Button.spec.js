import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Greeting from '../../src/components/Button';

describe('<Button />', () => {

	let spy, wrapper;

	describe('#onClick', () => {
		before(() => {
			spy = sinon.spy(Button.prototype, 'handleClick');
			wrapper = shallow(<Button />);
		});

		it('Should change it\'s state', () => {
			expect(wrapper.state().isClicked).toBe(false);
			wrapper.simulate('click');
			expect(wrapper.state().isClicked).toBe(true);
		});

		it('Should be called once with no arguments', () => {
			expect(spy.called).toBe(true);
			expect(spy.callCount).toEqual(1);
			expect(spy.args[0].length).toEqual(0);
			expect(spy.args.length).toEqual(1);
		});

	});
})