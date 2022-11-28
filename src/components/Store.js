import { useState } from "react"
import PRODUCTS from "../constants/constants"
import DefineTab from "./DefineTab"

const Store = () => {
  const [isProduct, setIsProduct] = useState(true)

  return (
    <div>
      <header>
        <button onClick={() => setIsProduct(true)}>Product List</button>
        <button onClick={() => setIsProduct(false)}>Shopping Cart</button>
      </header>
      <main>
        <DefineTab isProduct={isProduct} PRODUCTS={PRODUCTS} cart={[]} />
      </main>
    </div>
  )
}

export default Store
