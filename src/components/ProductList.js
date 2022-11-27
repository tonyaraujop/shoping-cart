const ProductList = ({products}) => {
  return (
    products.map(product => (
      <div>{product.name}: {product.description}</div>
      )
    )
  )
}

export default ProductList
