import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BackButton from "./BackButton";

test("renders Start Button", () => {
  render(<BackButton />);
  expect(screen.getByRole("button").innerHTML).toBe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="24.743" height="23.34" viewBox="0 0 24.743 23.34"><path d="M28.223,15.75H13.177l5.836-5.583a2.326,2.326,0,0,0,0-3.178,2.079,2.079,0,0,0-3.038,0L6.258,16.411a2.142,2.142,0,0,0-.633,1.575v.028a2.142,2.142,0,0,0,.633,1.575l9.71,9.422a2.079,2.079,0,0,0,3.037,0,2.326,2.326,0,0,0,0-3.178L13.17,20.25H28.216A2.2,2.2,0,0,0,30.368,18,2.178,2.178,0,0,0,28.223,15.75Z" transform="translate(-5.625 -6.33)" fill="var(--navbar-icon-color)"></path></svg>'
  );
});

test("calls onClick", () => {
  const handleClick = jest.fn();
  render(<BackButton onClick={handleClick}></BackButton>);

  fireEvent.click(screen.getByRole("button"));

  expect(handleClick).toBeCalled();
});
