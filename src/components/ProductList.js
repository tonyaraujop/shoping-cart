import { Product } from "./Product"

export const ProductList = ({ products, addToCart }) => (
  products.map((product) => <Product key={product.id} product={product} addToCart={addToCart} />)
)
