import { useState } from "react"
import Define from "../utils/define"

const Store = () => {
  const [isProduct, setIsProduct] = useState(true)

  return (
    <div>
      <header>
        <button onClick={() => setIsProduct(true)}>Product List</button>
        <button onClick={() => setIsProduct(false)}>Shopping Cart</button>
      </header>
      <main>
        {Define(isProduct)}
      </main>
    </div>
  )
}

export default Store
