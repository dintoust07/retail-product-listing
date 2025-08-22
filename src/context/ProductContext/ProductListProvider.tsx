import React, { useState } from 'react';
import type { IProductListResponse } from '../../types/product';
import { ProductContext } from './UseProductListContext';

export const ProductListProvider: React.FC<{children:React.ReactNode}> = ({children}) => {
  const [productResponse, setproductResponse] = useState<IProductListResponse>({
    products: [],
    total: 0,
    skip: 0,
    limit: 0
  });
 
  return (
      <ProductContext.Provider  
        value={{
          productResponse,
          handleProductResponse: (data:IProductListResponse)=> setproductResponse(data), 
        }}
      >
      {children}
      </ProductContext.Provider>  
  )
}
 