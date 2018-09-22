import React from 'react';

import { shallow } from 'enzyme';
import Hello from '../hello';

describe('Hello', () => {
  it('should render a <h1 />', () => {
		const wrapper = shallow(<Hello />);
    expect(wrapper.find('h1').length).toEqual(1);
	});

	it('shows a hello custom message given we pass a name as prop', () => {
		const name = 'Guest';
		const wrapper = shallow(<Hello name={name} />);
		expect(wrapper.text()).toEqual(`Hello ${name}!`);
	});
});