import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the matchers like toBeInTheDocument
import { useForm } from 'react-hook-form';
import FormInput from '../Components/FormInput';

const Wrapper = ({ children }) => {
  const methods = useForm();
  return <form>{children}</form>;
};

describe('FormInput Component', () => {
  const props = {
    label: "Sample Label",
    id: "sampleId",
    type: "text",
    placeholder: "Enter text",
    register: jest.fn(),
    required: true,
    errors: {}
  };

  it('should render without crashing', () => {
    render(
      <Wrapper>
        <FormInput {...props} />
      </Wrapper>
    );
  });

  it('should render the label', () => {
    render(
      <Wrapper>
        <FormInput {...props} />
      </Wrapper>
    );
    expect(screen.getByLabelText("Sample Label")).toBeInTheDocument();
  });

  it('should render the input with correct attributes', () => {
    render(
      <Wrapper>
        <FormInput {...props} />
      </Wrapper>
    );
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'sampleId');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should display an error message when there is an error', () => {
    const errorProps = {
      ...props,
      errors: { sampleId: true }
    };
    render(
      <Wrapper>
        <FormInput {...errorProps} />
      </Wrapper>
    );
    expect(screen.getByText("Sample Label is required")).toBeInTheDocument();
  });

  it('should not display an error message when there is no error', () => {
    render(
      <Wrapper>
        <FormInput {...props} />
      </Wrapper>
    );
    expect(screen.queryByText("Sample Label is required")).not.toBeInTheDocument();
  });
});
