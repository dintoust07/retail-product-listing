

import { describe, it, expect, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import type { IProductContext, IProductListResponse } from "../../../types/product";
import products from '../../../pages/Products/Fixtures/ProductList'
import TestComponent from '../__mocks__/Test.mock';

const mockProductResponse: IProductListResponse = {
  products: products,
  total: 2,
  skip: 0,
  limit: 10
};

const mockContext: IProductContext = {
  productResponse:mockProductResponse,
  handleProductResponse: vi.fn(),
};

vi.mock('../../../services/product', () => {
  const mockResponse: IProductListResponse = {
    products: products,
    total: 2,
    skip: 0,
    limit: 10
  };

  return {
    getProductList: vi.fn().mockResolvedValue(mockResponse),
  };
});

vi.mock('../../../context/ProductContext/UseProductListContext', () => ({
  UseProductListContext: () => mockContext,
}));

describe("useProductList", () => {
  it('validate product count', async () => {
    const { getByTestId } = render(<TestComponent />);

    await waitFor(() => {
      expect(getByTestId('productCount').textContent).toBe('1');
    });
  });
})