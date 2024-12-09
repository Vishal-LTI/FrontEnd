import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import NumberCard from "../Components/NumberCard";

describe("NumberCard Component", () => {
  const props = {
    title: "Test Title",
    value: "1234",
    imgUrl: "/path-to-image.png"
  };

  it("renders without crashing", () => {
    render(<NumberCard {...props} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("1234")).toBeInTheDocument();
    expect(screen.getByAltText("icon")).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(<NumberCard {...props} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("displays the correct value", () => {
    render(<NumberCard {...props} />);
    expect(screen.getByText("1234")).toBeInTheDocument();
  });

  it("renders the image with the correct source", () => {
    render(<NumberCard {...props} />);
    const img = screen.getByAltText("icon");
    expect(img).toHaveAttribute("src", "/path-to-image.png");
  });
});
