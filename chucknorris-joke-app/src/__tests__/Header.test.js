import React from "react";
import { Header } from "../components/Header";
import { shallow } from "enzyme";

describe("Header", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Includes a react-router link", () => {
    const wrapper = shallow(<Header />);
    const link = wrapper.find("Link");
    expect(link).toBeTruthy();
  });
});
