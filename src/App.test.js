import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import Autocomplete from './components/Autocomplete';

describe('fetch tests', () => {
	test('test input', () => {
		const mockgetdata = jest.fn();
		const wrapper = shallow(<Autocomplete items="/search" isVisible="true" getdata={mockgetdata} />);

		wrapper.find('input[type="text"]').at(0);
	});

});
