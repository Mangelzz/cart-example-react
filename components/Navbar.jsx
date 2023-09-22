import { Component } from 'react'
import Logo from './Logo'
import Cart from './Cart'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <Logo />
        <Cart />
      </nav>
    )
  }
}

export default Navbar