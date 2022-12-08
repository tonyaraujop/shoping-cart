export const Product = ({ product, addToCart = () => {}, hideAddToCartButton }) => {
  const { name, description } = product

  return (
    <>
      <div>{name}: {description}</div>
      {!hideAddToCartButton && <button onClick={() => addToCart(product)}>Add to Cart</button>}
    </>
  )
}
