import ProductTable from './ProductTable'
import useProductList  from '../../hooks/Products/useProductList'
import type { IProductList, IProductListResponse } from '../../types/product';
import { getProductList } from '../../services/product';
import SearchBar from '../../components/SearchBar';
import styles from '../styles';

export default function ProductList():React.ReactNode {
  const { 
    productResponse,
    handleProductResponse 
  } = useProductList();
 
  const productList: IProductList[] = productResponse.products
  const rowsPerPage: number = 10;
 
  const handleSearch = async(term: string) => {
    const productResponse: IProductListResponse= await getProductList(
      rowsPerPage, 
      0,
      term
    );
    handleProductResponse(productResponse);
  }
 
  return (
    <div style={styles.productContainer}>
      <SearchBar
        data-testid="search-bar"
        handleSearch={handleSearch}
      />

      <ProductTable
        data-testid="product-table"
        key="product-table"
        productList={productList}
      />
    </div>
  )
}
