import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", ()=>{
  test("Should load contact us component",() => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
  });
  // it and test are one and the same
  it ("Should load button inside my contact component",() => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load button inside my contact component",() => {
    render(<Contact />);
    const inputName = screen.getAllByPlaceholderText("name");
    expect(inputName.length).toBe(2);
  });
})

