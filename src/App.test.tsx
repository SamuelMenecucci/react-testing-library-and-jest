import React from "react";
import { render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import App from "./App";

test("button has correct initial color", () => {
  const { container } = render(<App />);

  //if i'm not sure what role an element have, I can use the logRoles
  logRoles(container);

  //find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ "background-color": "red" }); //if I pass the key with camelCase and any thing as value,  the test will give me a false positive. this is a known issue with jest-dom, reported May 19, 2022 -- even though the fix for a similar issue was supposedly merged in Oct 2019. The Workaround: use kebab case. the test will run correctly when the css property is specified with kebab case instead of camel case.
});

test("button has the correct initial text", () => {});

test("button turns blue when clicked", () => {});
