import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the matchers like toBeInTheDocument
import NumberCard from '../Atoms/NumberCard';

describe('NumberCard Component', () => {
  const props = {
    title: "Sample Title",
    value: "12345",
    imgUrl: "https://via.placeholder.com/150"
  };

  it('should render without crashing', () => {
    render(<NumberCard {...props} />);
  });

  it('should render the title', () => {
    render(<NumberCard {...props} />);
    expect(screen.getByText("Sample Title")).toBeInTheDocument();
  });

  it('should render the value', () => {
    render(<NumberCard {...props} />);
    expect(screen.getByText("12345")).toBeInTheDocument();
  });

  it('should render the image with the correct src and alt', () => {
    render(<NumberCard {...props} />);
    const imgElement = screen.getByAltText("icon");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', props.imgUrl);
  });

  it('should apply the correct classes to the elements', () => {
    render(<NumberCard {...props} />);
    expect(screen.getByRole('img')).toHaveClass('top-right-img');
    expect(screen.getByText("12345")).toHaveClass('card-text');
    expect(screen.getByText("Sample Title")).toHaveClass('card-title');
  });

  it('should have the correct structure', () => {
    const { container } = render(<NumberCard {...props} />);
    const card = container.querySelector('.number-card');
    expect(card).toBeInTheDocument();
    expect(card.querySelector('.card-body')).toBeInTheDocument();
  });
});
