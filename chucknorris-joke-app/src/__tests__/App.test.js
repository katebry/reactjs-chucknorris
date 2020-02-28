import React from "react";
import App from "../App";
import { shallow } from "enzyme";

it("Renders without crashing", () => {
  shallow(<App />);
});
