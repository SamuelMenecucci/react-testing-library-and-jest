import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import App from "./App";

test("button has correct initial color, and updates when clicked", () => {
  const { container } = render(<App />);

  //if i'm not sure what role an element have, I can use the logRoles
  logRoles(container);

  //find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ "background-color": "red" }); //if I pass the key with camelCase and any thing as value,  the test will give me a false positive. this is a known issue with jest-dom, reported May 19, 2022 -- even though the fix for a similar issue was supposedly merged in Oct 2019. The Workaround: use kebab case. the test will run correctly when the css property is specified with kebab case instead of camel case.

  //click button
  //fireEvent help us to interact with the elements in our virtual DOM
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ "background-color": "blue" });

  //expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red"); //checking the content text inside the button
});

test("initial conditions", () => {
  render(<App />);

  //check that the button starts out enable
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled(); //the function toBeEnable checks if the element are enabled.

  //check that the checkbox stats out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
