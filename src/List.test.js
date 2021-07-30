import React from "react";
import Enzyme, { shallow } from "enzyme";
import List from "./List";
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

let wrapper;
 const props = {
     title: 'assignments',
     currList: ['development','testing'],
 }
describe("List Component Test", () => {
    wrapper = shallow(<List {...props}/>);

  it("should render List Component successfully", () => {
    expect(wrapper.exists()).toBeTruthy();
    console.log('wrapper ', wrapper.debug())
  });

  it("should render title element", () => {
    const component = wrapper.find('#title')
    expect(component.exists()).toBeTruthy();
  });

  it("should test onchange event", () => {
    const result = wrapper.find('#assignment-input');
    result.simulate('change', {target: {value:"development"}});
    expect(wrapper.state('value')).toBe('development')
  })
});

