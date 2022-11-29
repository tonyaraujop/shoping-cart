const Product = ({ name, description, addToCart }) => {
  return (
    <>
      <div>{name}: {description}</div>
      <button>Add to Cart</button>
    </>
  )
}

export default Product
