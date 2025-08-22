
import { useContext, createContext } from 'react';
import type { IProductContext } from '../../types/product';

export const ProductContext = createContext<IProductContext | undefined>(undefined);

export const UseProductListContext = (): IProductContext => {
  const context:IProductContext | undefined = useContext(ProductContext);

  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }

  return context;
};
