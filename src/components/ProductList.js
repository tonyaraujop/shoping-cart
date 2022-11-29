import Product from "./Product"

const ProductList = ({ products }) => (
  products.map(({ name, description }) => <Product name={name} description={description} />)
)

export default ProductList
