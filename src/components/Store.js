import { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PRODUCTS } from "../constants/constants"
import { Cart } from "./Cart";
import { ProductList } from "./ProductList";

export const Store = () => {
  const [isProduct, setIsProduct] = useState(true)
  const [cartProducts, setCartProducts] = useState([])

  const flashMessage = () => {
    toast('Product already added')
  }

  const addToCart = (product) => {
    cartProducts.includes(product) ? flashMessage() : setCartProducts([...cartProducts, product])
  }

  const removeFromCart = (product) => {
    setCartProducts([...cartProducts.filter(cartProduct => cartProduct !== product)])
  }

  return (
    <div>
      <header>
        <button onClick={() => setIsProduct(true)}>Product List</button>
        <button onClick={() => setIsProduct(false)}>Shopping Cart</button>
      </header>
        <ToastContainer />
      <main>
        {isProduct ? <ProductList products={PRODUCTS} addToCart={addToCart}/> : <Cart cartItems={cartProducts} removeFromCart={removeFromCart}/>}
      </main>
    </div>
  )
}
