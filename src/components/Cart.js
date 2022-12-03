import { CartItem } from "./CartItem"

export const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <>
      <header><h1>Shopping Cart</h1></header>
      <div>Your shopping cart have {cartItems.length} items added</div>
      <main>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} removeFromCart={removeFromCart} />
        ))}
      </main>
    </>
  )
}
