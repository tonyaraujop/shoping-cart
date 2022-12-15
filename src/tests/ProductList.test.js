import { render, screen } from "@testing-library/react"
import { ProductList } from "../components/ProductList"

describe('<ProductList />', () => {
  const mageKnight = { id: 1, name: 'Mage Knight', description: 'Developed by Vlaada Chvátil' }
  const feudum = { id: 2, name: 'Feudum', description: 'Developed by Mark Swanson' }
  const addToCart = jest.fn()
  const products = [mageKnight, feudum]

  it('renders a list of products', () => {
   render(<ProductList products={products} addToCart={addToCart}/>)
   
   expect(screen.getByText(/Mage Knight: Developed by Vlaada Chvátil/i)).toBeInTheDocument()
   expect(screen.getByText(/Feudum: Developed by Mark Swanson/i)).toBeInTheDocument()
  })

  it('renders add to cart button', () => {
   render(<ProductList products={products} addToCart={addToCart}/>)

   expect(screen.getAllByRole('button', {name: 'Add to Cart'})).toHaveLength(2)
  })
})
