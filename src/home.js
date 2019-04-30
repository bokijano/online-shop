import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Online from "./home pictures/onlineShoping.jpg";
import FurnitureImage from "./home pictures/furniture.jpg";
import TechniqueImage from "./home pictures/tv.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Image
          className="home-look"
          src={Online}
          alt="online shop"
          rounded
          fluid
        />
        <div className="shop-look">
          <span style={{ marginLeft: "5px" }} className="furniture-look">
            <h5>Furniture shop</h5>
            <Image
              className="img-home"
              src={FurnitureImage}
              alt="furniture"
              rounded
              fluid
            />
          </span>
          <span className="technique-look">
            <h5>Technique shop</h5>
            <Image
              className="img-home"
              src={TechniqueImage}
              alt="technique"
              rounded
              fluid
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
