import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProductListProvider } from '../ProductListProvider';
import TestComponent from "../__mocks__/Test.mock";
 
describe("UseProductListContext", ()=> {
  it('throws error when used outside ProductListProvider', () => {
    expect(() => render(<TestComponent />)).toThrow(
      'useProductContext must be used within a ProductProvider'
    );
  });

   it('returns context when used inside ProductListProvider', () => {
    const { getByText } = render(
      <ProductListProvider>
        <TestComponent />
      </ProductListProvider>
    );

    expect(getByText('0')).toBeTruthy(); 
  });
})