import './App.css'
import { ProductListProvider } from './context/ProductContext/ProductListProvider'
import ProductList from './pages/Products/ProductList'

function App() {
  return (
    <ProductListProvider>
      <ProductList />
    </ProductListProvider>
  )
}

export default App
