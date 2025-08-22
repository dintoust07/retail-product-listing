import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MockInputField from '../__mocks__/InputField.mock';
import SearchBar from '../index';

vi.mock('../../../utils/debounce', () => ({
  default: (fn: void) => fn,
}));

vi.mock('../styles', () => ({
  default: {
    searchBar: { border: '1px solid red' },
  },
}));

vi.mock('../../FormElements/InputField', () => ({
  default: MockInputField
}));

describe('SearchBar Component', () => {
  it('initial rendering of search bar', () => {
    const mockSearch = vi.fn();
    render(<SearchBar handleSearch={mockSearch} />);

    const input = screen.getByTestId('search-bar');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'search');
    expect(input).toHaveAttribute('placeholder', 'Search');
  });

  it('calls handleSearch with correct input value', () => {
    const mockSearch = vi.fn();
 
    render(<SearchBar handleSearch={mockSearch} />);

    const input = screen.getByTestId('search-bar');
    fireEvent.change(input, { target: { value: 'apple' } });

    expect(mockSearch).toBeCalledWith('apple');
  });
});
