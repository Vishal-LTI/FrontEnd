import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the matchers like toBeInTheDocument
import PrimaryButton from '../Atoms/PrimaryButton';

describe('PrimaryButton Component', () => {
  const props = {
    label: "Click Me",
    btnColor: "#007bff",
    onClick: jest.fn(),
    type: "button",
    width: "150px",
    disabled: false
  };

  it('should render without crashing', () => {
    render(<PrimaryButton {...props} />);
  });

  it('should render the button label', () => {
    render(<PrimaryButton {...props} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it('should apply the correct styles', () => {
    render(<PrimaryButton {...props} />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveStyle({
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      width: '150px'
    });
  });

  it('should handle the onClick event', () => {
    render(<PrimaryButton {...props} />);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<PrimaryButton {...props} disabled={true} />);
    const button = screen.getByText("Click Me");
    expect(button).toBeDisabled();
  });

  it('should have the correct type attribute', () => {
    render(<PrimaryButton {...props} />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveAttribute('type', 'button');
  });
});
