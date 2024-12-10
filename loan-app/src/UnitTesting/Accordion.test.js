import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import Accordion from "../Atoms/Accordion";

describe("Accordion Component", () => {
  const props = {
    title: "Test Title",
    description: "Test Description",
    color: "#fff",
    bgColor: "#000",
  };

  it("renders without crashing", () => {
    render(
      <Router>
        <Accordion {...props} />
      </Router>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("toggles description visibility on button click", () => {
    render(
      <Router>
        <Accordion {...props} />
      </Router>
    );
    const button = screen.getByText("Test Title");
    // First click to show the description
    fireEvent.click(button);
    expect(screen.getByText("Test Description")).toBeVisible();

    // Second click to hide the description
    fireEvent.click(button);
    expect(screen.getByText("Test Description")).not.toBeVisible();
  });
});
