import React, { Component } from "react";
import { Image } from "react-bootstrap";

class ShopBag extends Component {
  render() {
    return (
      <section style={{ marginTop: "100px" }}>
        <span onclick="moveCart()" class="close-cart">
          <i class="fas fa-window-close" />
        </span>
        <h3 class="fontTwo">Your shoping cart</h3>
      </section>
    );
  }
}

export default ShopBag;
