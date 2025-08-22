import { useContext } from 'react';
import { describe, it, expect, } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductListProvider } from '../ProductListProvider';
import { ProductContext } from '../UseProductListContext';
import products from '../../../pages/Products/Fixtures/ProductList'

const TestConsumer = () => {
  const context = useContext(ProductContext);
  if (!context) return <div>No context</div>;

  const { productResponse, handleProductResponse } = context;

  return (
    <div>
      <div data-testid="totalProducts">{productResponse.total}</div>
      <button
        onClick={() =>
          handleProductResponse({
            products: products,
            total: 1,
            skip: 0,
            limit: 10,
          })
        }
      >
        Set Products
      </button>
    </div>
  );
};

describe('ProductListProvider', () => {
  it('provides default context values', () => {
    render(
      <ProductListProvider>
        <TestConsumer />
      </ProductListProvider>
    );
    expect(screen.getByTestId('totalProducts').textContent).toBe('0');
  });

   it('updates productResponse when handleProductResponse is called', () => {
    render(
      <ProductListProvider>
        <TestConsumer />
      </ProductListProvider>
    );

    const button = screen.getByText('Set Products');
    fireEvent.click(button);

    expect(screen.getByTestId('totalProducts').textContent).toBe('1');
  });
});
