import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductTable from '../ProductTable'
import products from '../Fixtures/ProductList'

const mockProductList = products;

describe('ProductTable Component', () => {
  it('renders the table headers correctly', () => {
    render(
      <ProductTable
        key="product-table"
        productList={mockProductList} 
      />
    );

    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Image')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Brand')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
  });

  it('renders product rows correctly', () => {
    render(
      <ProductTable 
        key="product-table"
        productList={mockProductList} 
      />
    );

    mockProductList.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(product.category)).toBeInTheDocument();
      expect(screen.getByText(product.brand)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();

      const image = screen.getByAltText(product.title) as HTMLImageElement;
      expect(image).toBeInTheDocument();
      expect(image.src).toBe(product.images[0]);
    });
  });
});