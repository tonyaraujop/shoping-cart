<<<<<<< HEAD
export const Product = ({ product, addToCart = () => {}, hideAddToCartButton }) => {
=======
export const Product = ({ product, addToCart, removeFromCart}) => {
>>>>>>> 595920d (add removeFromCart function)
  const { name, description } = product

  return (
    <>
      <div>{name}: {description}</div>
<<<<<<< HEAD
      {!hideAddToCartButton && <button onClick={() => addToCart(product)}>Add to Cart</button>}
=======
      {removeFromCart ?
        <button onClick={() => removeFromCart(product)}>Remove item from Cart</button> :
        <button onClick={() => addToCart(product)}>Add to Cart</button>}
>>>>>>> 595920d (add removeFromCart function)
    </>
  )
}
