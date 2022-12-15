import { render, screen } from "@testing-library/react"
import { CartItem } from "../components/CartItem"

describe('< CartItem />', () => {
  it('render cart item', () => {
    const cartItem = { name: 'Mage Knight', description: 'Developed by Vlaada Chvátil' }
    const removeFromCart = jest.fn()

    render(<CartItem cartItem={cartItem} removeFromCart={removeFromCart} />)

    expect(screen.getByText(/Mage Knight: Developed by Vlaada Chvátil/i)).toBeInTheDocument()
  })

  it('render remove from cart button', () => {
    const cartItem = { name: 'Mage Knight', description: 'Developed by Vlaada Chvátil' }
    const removeFromCart = jest.fn()

    render(<CartItem cartItem={cartItem} removeFromCart={removeFromCart} />)

    expect(screen.getByRole('button', {name: 'Remove item from Cart'})).toBeInTheDocument()
  })
})
