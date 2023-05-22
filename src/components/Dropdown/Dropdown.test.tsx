import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown test suite', () => {
  const mockData = {
    emptyStatePlaceholder: 'foo', options: ['bar', 'baz']
  };

  it('should render dropdown in collapsed state by default', () => {
    render(<Dropdown {...mockData} />);

    const option = screen.queryByText(mockData.options[0]);

    expect(option).not.toBeInTheDocument();
  });

  it('should render placeholder in the header if no optionIndex is provided', () => {
    render(<Dropdown {...mockData} />);

    const placeholder = screen.getByText(mockData.emptyStatePlaceholder);

    expect(placeholder).toBeInTheDocument();
  });

  it('should render selected value in the header if optionIndex is provided', () => {
    render(<Dropdown {...mockData} optionInitialIndex={0} />);

    const placeholder = screen.queryByText(mockData.emptyStatePlaceholder);
    const option = screen.queryByText(mockData.options[0]);

    expect(placeholder).not.toBeInTheDocument();
    expect(option).toBeInTheDocument();
  });

  it('should open dropdown by click on the header and close it by click on the option', () => {
    render(<Dropdown {...mockData} />);

    const placeholder = screen.getByText(mockData.emptyStatePlaceholder);
    let optionOne = screen.queryByText(mockData.options[0]);
    let optionTwo = screen.queryByText(mockData.options[1]);

    expect(optionOne).not.toBeInTheDocument();
    expect(optionTwo).not.toBeInTheDocument();

    fireEvent.click(placeholder);
    optionOne = screen.getByText(mockData.options[0]);
    optionTwo = screen.getByText(mockData.options[1]);

    expect(optionOne).toBeInTheDocument();
    expect(optionTwo).toBeInTheDocument();

    fireEvent.click(optionTwo);
    optionOne = screen.queryByText(mockData.options[0]);

    expect(optionOne).not.toBeInTheDocument();
  });
});
