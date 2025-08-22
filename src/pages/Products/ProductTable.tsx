import type { IPropductProps } from '../../types/product';
import styles from '../styles';

export default function ProductTable({productList}: IPropductProps) {
  return (
    <div style={styles.productTableContainer}>
      <table style={styles.productTable}>
        <thead>
          <tr style={styles.tableHeaderRow}>
            <th style={styles.productTableheader}>Product</th>
            <th style={styles.productTableheader}>Image</th>
            <th style={styles.productTableheader}>Category</th>
            <th style={styles.productTableheader}>Brand</th>
            <th style={styles.productTableheader}>Price</th>
          </tr>
        </thead>
        
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <td style={styles.productTableCell}>{product.title}</td>
              <td  style={styles.productTableCell}>
                <img src={product.images[0]} alt={product.title} width="60" />
              </td>
             
              <td style={styles.productTableCell}>{product.category}</td>
              <td style={styles.productTableCell}>{product.brand}</td>
              <td style={styles.productTableCell}>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
