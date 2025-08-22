import React from 'react'
import  useProductList  from '../useProductList';

const TestComponent: React.FC = () => {
  const {
    productResponse,
  } = useProductList();

  return (
    <div>
      <div data-testid="productCount">
        {productResponse?.products?.length ?? 0}
      </div>
    </div>
  );
}

export default TestComponent;