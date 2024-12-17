import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the matchers like toBeInTheDocument
import TitleCard from '../Atoms/TitleCard';

describe('TitleCard Component', () => {
  const props = {
    title: "Sample Title",
    children: <div>Child Component</div>
  };

  it('should render without crashing', () => {
    render(<TitleCard {...props} />);
  });

  it('should render the title', () => {
    render(<TitleCard {...props} />);
    expect(screen.getByText("Sample Title")).toBeInTheDocument();
  });

  it('should render the children', () => {
    render(<TitleCard {...props} />);
    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });

  it('should have the correct structure', () => {
    const { container } = render(<TitleCard {...props} />);
    const card = container.querySelector('.mb-4');
    expect(card).toBeInTheDocument();
    expect(card.querySelector('.title')).toBeInTheDocument();
    expect(card.querySelector('.row')).toBeInTheDocument();
  });
});
