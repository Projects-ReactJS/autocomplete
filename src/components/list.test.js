import React, { Children } from 'react';
import { render, screen } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DataList from './list';
import Autocomplete from './Autocomplete';
import App from '../App';
configure({ adapter: new Adapter() });

describe('test DataList', () => {
	test('simulate key down', () => {
		const ac = new Autocomplete();
		const evt = {
			nativeEvent: {
				path: [
					{ children: [{ children: {} }, { children: {} }] },
					{ children: [{ children: {} }, { children: {} }] },
				],
			},
			keyCode: 40,
		};
		const keydownmethod = ac.onkeyDownPress(evt);
		const mockgetdata = jest.fn();
		const mockonclicklistitem = jest.fn();

		const wrapper = shallow(
			<DataList
				cursor={0}
				searchTerm={'for'}
				getdata={mockgetdata}
				keydown={keydownmethod}
				onclicklistitem={mockonclicklistitem}
			></DataList>
		);
		console.log(wrapper.debug());
		wrapper.find('DataList').at(0).simulate('keydown');
	});
	test('simulate getdata', () => {
      const app =  new App();
      const getdata = app.getData;
      const keydownmethod = jest.fn();
      const mockonclicklistitem = jest.fn();
     console.log(getdata);
    
    })
})
