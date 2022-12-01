export const Product = ({ product, addToCart = () => {}, disableButton }) => {
  const { name, description } = product

  return (
    <>
      <div>{name}: {description}</div>
      {disableButton ? <></> : <button onClick={() => addToCart(product)}>Add to Cart</button>}
    </>
  )
}
