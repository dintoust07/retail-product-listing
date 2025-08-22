import { productApiEndpoints } from "../constants/apiEndPoints"
import type { IProductListResponse } from "../types/product";

export const getProductList = async (
  limit: number = 10,
  skip: number = 0,
  term: string | '' = ''
): Promise<IProductListResponse> => {
  try {
    const response = await fetch(productApiEndpoints.list(limit, skip, term));

    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }

    const productList: IProductListResponse = await response.json();
    return productList;
  } catch (error) {
    console.error('Error fetching product list:', error);
 
    return {
      products: [],
      total: 0,
      limit,
      skip,
    };
  }
}