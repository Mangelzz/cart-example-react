import { Component } from "react";
import '../src/App.css'
import Button from "./Button";

class Product extends Component {
  render() {
    const { product, addToCart } = this.props;
    const { img, name, price } = product;

    return (
      <div className="product">
        <img src={img} alt={product.name} />
        <h2>{name}</h2>
        <h4>{price}</h4>
        <Button onClick={() => addToCart(product)}>
            Add to cart
        </Button>
      </div>
    );
  }
}

export default Product;
