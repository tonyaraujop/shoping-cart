import { useState } from "react"
import { PRODUCTS } from "../constants/constants"
import Cart from "./Cart";
import ProductList from "./ProductList";

const Store = () => {
  const [isProduct, setIsProduct] = useState(true)

  return (
    <div>
      <header>
        <button onClick={() => setIsProduct(true)}>Product List</button>
        <button onClick={() => setIsProduct(false)}>Shopping Cart</button>
      </header>
      <main>
        {isProduct ? <ProductList products={PRODUCTS}/> : <Cart cart={[]}/>}
      </main>
    </div>
  )
}

export default Store
