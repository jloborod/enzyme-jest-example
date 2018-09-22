import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Hello from '../hello/index';

it('renders properly', () => {
	const wrapper = shallow(<Hello name="CodeSandbox" />);
	expect(wrapper.text()).toEqual('Hello CodeSandbox!');
});
