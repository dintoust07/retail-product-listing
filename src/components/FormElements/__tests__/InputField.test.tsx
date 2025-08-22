import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InputField from '../InputField';

describe('InputField', () => {
  it('initial rendering of input field', () => {
    render(
      <InputField 
        placeholder="Search" 
        value="apple" 
      />
    );
    
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Search');
    expect(input).toHaveValue('apple');
  });
});