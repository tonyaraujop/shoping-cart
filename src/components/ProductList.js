import Product from "./Product"

const ProductList = ({ products, addToCart }) => (
  products.map(({ name, description }) => <Product name={name} description={description} addToCart={addToCart} />)
)

export default ProductList
