export const Product = ({ product, addToCart, removeFromCart}) => {
  const { name, description } = product

  return (
    <>
      <div>{name}: {description}</div>
      {removeFromCart ?
        <button onClick={() => removeFromCart(product)}>Remove item from Cart</button> :
        <button onClick={() => addToCart(product)}>Add to Cart</button>}
    </>
  )
}
