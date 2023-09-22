import { Component } from "react";
import Products from "../components/Products";
import "./App.css";
import Title from "../components/Title";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

class App extends Component {
  state = {
    products: [
      { name: "laptop", price: 1000, img: "/laptop.png" },
      { name: "phone", price: 1500, img: "/phone.png" },
      { name: "speaker", price: 800, img: "/speaker.png" },
    ],
  };

  addToCart = (product) => {
    console.log(product);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products 
            products={this.state.products} 
            addToCart={this.addToCart} 
          />
        </Layout>
      </div>
    );
  }
}

export default App;
