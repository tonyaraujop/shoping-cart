import Product from "./Product"

const ProductList = ({ products }) => {
  products.map(product => {
    const {name, description} = product

    return <Product name={name} description={description} />
    }
  )
}

export default ProductList
