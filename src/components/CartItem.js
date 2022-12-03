import { Product } from "./Product"

export const CartItem = ({ cartItem, removeFromCart}) => {
  return (
    <Product key={cartItem.id} product={cartItem} removeFromCart={removeFromCart} />
  )
}
