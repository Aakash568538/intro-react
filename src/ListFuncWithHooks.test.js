import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import ListFunc from "./ListFuncWithHooks";

Enzyme.configure({ adapter: new Adapter() })

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((iniState) => [iniState, setState]);

let wrapper;
 const props = {
     title: 'assignments',
     currList: ['development','testing'],
 }
describe("ListFunc Component Test", () => {
    wrapper = shallow(<ListFunc {...props}/>);

  it("should render List Component successfully", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render title element", () => {
    const component = wrapper.find('#title')
    expect(component.exists()).toBeTruthy();
  });

  it("should test onchange event", () => {
    const result = wrapper.find('#assignment-input');
    console.log('useStateSpy ', useStateSpy.mock)
    expect(useStateSpy.mock.calls[0][0]).toBe('aaa')
    result.simulate('change', {target: {value:"development"}});
    expect(setState.mock.calls[0][0]).toBe('development')
  })
});