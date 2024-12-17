import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // Import this for the toHaveClass and toBeInTheDocument matchers
import Accordion from "../Atoms/Accordion";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

describe("Accordion Component", () => {
  const props = {
    title: "Accordion Title",
    description: "This is the accordion description.",
    btnTitle: "Click Me", // Adding btnTitle for the button
    btnUrl: "/new-page",
  };

  it("should render the accordion title", () => {
    renderWithRouter(<Accordion {...props} />);
    expect(screen.getByText("Accordion Title")).toBeInTheDocument(); // Corrected assertion
  });

  it("should render the accordion description", () => {
    renderWithRouter(<Accordion {...props} />);
    expect(
      screen.getByText("This is the accordion description.")
    ).toBeInTheDocument(); // Corrected assertion
  });

  it("should toggle accordion content on button click", () => {
    renderWithRouter(<Accordion {...props} />);
    const button = screen.getByRole("button", { name: "Accordion Title" });
    fireEvent.click(button);

    fireEvent.click(button);
    expect(
      screen.getByText("This is the accordion description.")
    ).not.toHaveClass("show");
  });

  it("should navigate to the provided URL on button click", () => {
    renderWithRouter(<Accordion {...props} />);
    const navigateButton = screen.getByText("Click Me");
    fireEvent.click(navigateButton);
    expect(window.location.pathname).toBe("/new-page");
  });

  it("should not show the description initially", () => {
    renderWithRouter(<Accordion {...props} />);
    expect(
      screen.queryByText("This is the accordion description.")
    ).not.toHaveClass("show");
  });
});
