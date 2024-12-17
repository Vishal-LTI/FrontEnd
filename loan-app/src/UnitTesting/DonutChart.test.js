import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // for the matchers like toBeInTheDocument
import DonutChartComponent from "../Atoms/DonutChart";
import { Doughnut } from "react-chartjs-2";

// Mock the Doughnut chart to avoid rendering the actual chart in tests
jest.mock("react-chartjs-2", () => ({
  Doughnut: jest.fn(() => <div>Mock Doughnut Chart</div>),
}));

describe("DonutChartComponent", () => {
  const mockData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  it("should render the title", () => {
    render(<DonutChartComponent data={mockData} title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should call Doughnut with the correct data", () => {
    render(<DonutChartComponent data={mockData} title="Test Title" />);
    expect(Doughnut).toHaveBeenCalledWith(
      expect.objectContaining({ data: mockData }),
      {}
    );
  });
});
