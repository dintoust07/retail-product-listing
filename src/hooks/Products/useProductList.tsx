import { useEffect } from 'react';
import { getProductList } from '../../services/product';
import type { IProductListResponse } from "../../types/product";
import { UseProductListContext } from '../../context/ProductContext/UseProductListContext';

export default function useProductList() {
  const { productResponse,   handleProductResponse} = UseProductListContext();

  const fetchProductData = async() => {
    const productResponse: IProductListResponse= await getProductList();
    
    handleProductResponse(productResponse);
  }

  useEffect(()=> {
    fetchProductData();
  }, []);
 
  return { productResponse, handleProductResponse}
}
