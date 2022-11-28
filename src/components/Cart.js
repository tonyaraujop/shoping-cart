const Cart = ({ cart }) => {
  return (
    <>
      <header><h1>Shopping Cart</h1></header>
      <div>Your shopping cart have {cart.length} items added</div>
    </>
  )
}

export default Cart
