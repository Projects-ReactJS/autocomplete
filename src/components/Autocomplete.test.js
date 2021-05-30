import React from 'react';
import {render,screen} from "@testing-library/react";
import { configure, shallow ,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Autocomplete from './Autocomplete';
import List from './list';



configure({ adapter: new Adapter() });
describe('test List', () => {
    test("test List rendering",() => {

        const mockonclicklistitem = jest.fn();
        const mockgetdata = jest.fn();
  
      const wrapper = shallow(<List isVisible={true} searchTerm="abcd" onclicklistitem={mockonclicklistitem}
        cursor= {0}
        getdata={mockgetdata}></List>)
        console.log(wrapper.debug());
        wrapper.find('ul[className="list-active"]').at(0);
      
    })
})