import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the matchers like toBeInTheDocument
import { BrowserRouter } from 'react-router-dom';
import FeatureCard from '../Components/FeatureCard';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('FeatureCard Component', () => {
  const props = {
    img: "https://via.placeholder.com/150",
    title: "Sample Title",
    description: "Sample Description",
    btnText: "Click Me",
    link: "/sample-link"
  };

  it('should render without crashing', () => {
    renderWithRouter(<FeatureCard {...props} />);
  });

  it('should render the image with the correct src and alt attributes', () => {
    renderWithRouter(<FeatureCard {...props} />);
    const imgElement = screen.getByAltText("Sample Title");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', props.img);
  });

  it('should render the title', () => {
    renderWithRouter(<FeatureCard {...props} />);
    expect(screen.getByText("Sample Title")).toBeInTheDocument();
  });

  it('should render the description', () => {
    renderWithRouter(<FeatureCard {...props} />);
    expect(screen.getByText("Sample Description")).toBeInTheDocument();
  });

  it('should render the button with the correct text', () => {
    renderWithRouter(<FeatureCard {...props} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it('should navigate to the correct link when button is clicked', () => {
    renderWithRouter(<FeatureCard {...props} />);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(window.location.pathname).toBe("/sample-link");
  });

  it('should apply the correct classes to the elements', () => {
    const { container } = renderWithRouter(<FeatureCard {...props} />);
    expect(container.querySelector('.card')).toBeInTheDocument();
    expect(container.querySelector('.slide.slide1')).toBeInTheDocument();
    expect(container.querySelector('.slide.slide2')).toBeInTheDocument();
    expect(screen.getByText("Sample Title")).toHaveClass('card-title');
    expect(screen.getByText("Sample Description")).toHaveClass('card-text');
    expect(screen.getByRole('button')).toHaveClass('btn btn-danger mt-auto feature-card-button');
  });
});
