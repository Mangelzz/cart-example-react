import { Component } from 'react'
import '../src/App.css'

class Button extends Component {
  render() {
    return (
      <button className='btn' {...this.props} />
    )
  }
}

export default Button