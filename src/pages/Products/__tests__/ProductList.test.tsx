import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, vi, expect, beforeEach } from 'vitest';
import ProductList from '../ProductList';
import type { IProductListResponse, IProductList } from '../../../types/product';
import products from '../Fixtures/ProductList'

const mockProductResponse: IProductListResponse = {
  products: products,
  total: 20,
  skip: 100,
  limit: 10
};

vi.mock('../../../services/product', () => ({
  getProductList: vi.fn(() => Promise.resolve(mockProductResponse)),
}));

const mockHandleProductResponse = vi.fn();

vi.mock('../../../hooks/Products/useProductList', () => ({
  default: () => ({
    productResponse: mockProductResponse,
    handleProductResponse: mockHandleProductResponse,
  }),
}));

vi.mock('../../../components/SearchBar', () => ({
  default: ({ handleSearch }: { handleSearch: (term: string) => void }) => (
    <button data-testid="search-bar" onClick={() => handleSearch('apple')}>
      Mock SearchBar
    </button>
  ),
}));

vi.mock('../ProductTable', () => ({
  default: ({ productList }: { productList: IProductList[] }) => (
    <div data-testid="product-table">{`Mock ProductTable with ${productList.length} items`}</div>
  ),
}));
 
describe('ProductList Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Initial rendering of products table and search bar', () => {
    render(<ProductList />);
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('product-table')).toBeInTheDocument();
  });

  it('calls handleSearch with correct term', async () => {
    render(<ProductList />);
    fireEvent.click(screen.getByTestId('search-bar'));

    await waitFor(() => {
      expect(mockHandleProductResponse).toHaveBeenCalledWith(mockProductResponse);
    });
  });
});
