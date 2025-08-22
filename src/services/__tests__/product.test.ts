import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getProductList } from '../product';
import type { IProductListResponse } from '../../types/product';
import products from '../../pages/Products/Fixtures/ProductList';

const mockResponse: IProductListResponse = {
  products: products,
  total: 20,
  skip: 100,
  limit: 10
};

beforeEach(() => {
  vi.resetAllMocks();
});

describe('getProductList', () => {
  it('fetches product list successfully', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    ) as unknown as typeof fetch;

    const result = await getProductList(10, 0, '');
    expect(fetch).toBeCalled()
       
    expect(result).toEqual(mockResponse);
  });

  it('throws error when response is not ok', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        json: () => Promise.resolve({}),
      })
    ) as unknown as typeof fetch;

    await expect(getProductList()).rejects.toThrow('Network response was not ok');
  });
});
