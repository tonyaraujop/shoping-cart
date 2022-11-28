import Cart from "./Cart";
import ProductList from "./ProductList";

function DefineTab ({ isProduct, PRODUCTS, cart }) {
  if (isProduct) {
    return (
      <ProductList products={PRODUCTS}/>
    )
  } else if (!isProduct) {
    return (
      <Cart cart={cart}/>
    )
  }
}

export default DefineTab;
