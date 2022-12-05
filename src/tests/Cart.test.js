import { render, screen } from "@testing-library/react"
import { Cart } from "../components/Cart"

describe('<Cart />', () => {
  const mageKnight = { id: 1, name: 'Mage Knight', description: 'Developed by Vlaada Chvátil' }
  const feudum = { id: 2, name: 'Feudum', description: 'Developed by Mark Swanson' }
  const removeFromCart = jest.fn()
  const cartItems = [mageKnight, feudum]

  it('renders cart title', () => {
    render(<Cart cartItems={cartItems} removeFromCart={removeFromCart} />)

    expect(screen.getByText('Shopping Cart')).toBeInTheDocument()
  })

  it('renders total products in cart', () => {
    render(<Cart cartItems={cartItems} removeFromCart={removeFromCart} />)

    expect(screen.getByText(`Your shopping cart have ${cartItems.length} items added`)).toBeInTheDocument()
  })

  it('renders remove from cart button', () => {
    render(<Cart cartItems={cartItems} removeFromCart={removeFromCart} />)

    expect(screen.getAllByRole('button', {name: 'Remove item from Cart'})).toHaveLength(2)
  })

  it('renders a list of products', () => {
    render(<Cart cartItems={cartItems} removeFromCart={removeFromCart} />)

    expect(screen.getByText(/Mage Knight: Developed by Vlaada Chvátil/i)).toBeInTheDocument()
    expect(screen.getByText(/Feudum: Developed by Mark Swanson/i)).toBeInTheDocument()
   })
})
