import Cart from "../components/Cart";
import ProductList from "../components/ProductList";

const PRODUCTS = [
  {
    name: 'Feudum',
    description: 'Game designed by Mark Swanson'
  },
  {
    name: 'Mage Knight',
    description: 'Game designed by Vlaada Chvátil'
  },
  {
    name: 'Bonfire',
    description: 'Game designed by Stefan Feld'
  }
]

const cart = []

function Define (isProduct) {
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

export default Define;
