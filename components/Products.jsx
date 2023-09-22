import { Component } from "react";
import Product from "./Product";
import '../src/App.css'

class Products extends Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      <div className="products">
        {products.map((product) => (
          <Product 
						key={product.name} 
						product={product} 
						addToCart={addToCart}
					/>
        ))}
      </div>
    );
  }
}

export default Products;
