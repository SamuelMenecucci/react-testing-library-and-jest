import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />); //the first thing that happens in the test function is we run this render method. the render method creates a virtual dom for whatever jsx/tsx you give it as the argument. here the argument is the tsx app component.
  const linkElement =
    //screen is a global object that I can use to access the virtual DOM and select the elements with the queries.
    screen.getByRole("link", { name: /learn react/i }); //as the element that have the Learn React text is an anchor, i can select by using getByRole, passing the role link.
  expect(linkElement).toBeInTheDocument();
});
