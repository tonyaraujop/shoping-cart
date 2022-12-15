import { render, screen } from "@testing-library/react"
import { Product } from "../components/Product"

describe('<Product />', () => {
  it('renders product', () => {
    const product = { name: 'Mage Knight', description: 'Developed by Vlaada Chvátil' }
    const addToCart = jest.fn()

    render(<Product product={product} addToCart={addToCart} />)
 
    expect(screen.getByText(/Mage Knight: Developed by Vlaada Chvátil/i)).toBeInTheDocument()
  })

  it('renders addToCart button if removeFromCart is not passed as a prop', () => {
    const product = { name: 'Mage Knight', description: 'Developed by Vlaada Chvátil' }
    const addToCart = jest.fn()

    render(<Product product={product} addToCart={addToCart} />)
 
    expect(screen.getByRole('button', {name: 'Add to Cart'})).toBeInTheDocument()
  })

  it('renders removeFromCart button if removeFromCart is passed as a prop', () => {
    const product = { name: 'Mage Knight', description: 'Developed by Vlaada Chvátil' }
    const removeFromCart = jest.fn()

    render(<Product product={product} removeFromCart={removeFromCart} />)
 
    expect(screen.getByRole('button', {name: 'Remove item from Cart'})).toBeInTheDocument()
  })
})
