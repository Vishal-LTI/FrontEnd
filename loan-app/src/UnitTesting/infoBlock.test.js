import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the matchers like toBeInTheDocument
import InfoBlock from '../Atoms/InfoBlock';

describe('InfoBlock Component', () => {
  const props = {
    title: "Sample Title",
    value: "Sample Value",
    className: "custom-class"
  };

  it('should render without crashing', () => {
    render(<InfoBlock {...props} />);
  });

  it('should render the title', () => {
    render(<InfoBlock {...props} />);
    expect(screen.getByText("Sample Title:")).toBeInTheDocument();
  });

  it('should render the value', () => {
    render(<InfoBlock {...props} />);
    expect(screen.getByText("Sample Value")).toBeInTheDocument();
  });

  it('should apply the custom class', () => {
    const { container } = render(<InfoBlock {...props} />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should render the correct structure', () => {
    const { container } = render(<InfoBlock {...props} />);
    const divElement = container.querySelector('.mb-3');
    expect(divElement).toBeInTheDocument();
    expect(divElement.querySelector('.form-label')).toBeInTheDocument();
    expect(divElement.querySelector('span')).toBeInTheDocument();
  });

  it('should apply bold style to the label', () => {
    render(<InfoBlock {...props} />);
    const labelElement = screen.getByText("Sample Title:");
    expect(labelElement).toHaveStyle('fontWeight: bold');
  });
});
