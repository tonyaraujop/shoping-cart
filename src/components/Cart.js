import { Product } from "./Product"

export const Cart = ({ products }) => {
  return (
    <>
      <header><h1>Shopping Cart</h1></header>
      <div>Your shopping cart have {products.length} items added</div>
      <main>
        {products.map((product) => (
          < Product key={product.id} product={product} hideAddToCartButton={true}/>
        ))}
      </main>
    </>
  )
}
