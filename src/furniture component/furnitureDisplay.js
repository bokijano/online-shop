import React, { Component } from "react";
import Furniture from "./furniture";
import furnitureList from "./furnitureList";
import { Image } from "react-bootstrap";
import homePicture from "./pictures/back.jpg";
import MobileOne from "./mobile-pictures/mob1.jpg";
import MobileTwo from "./mobile-pictures/mob2.jpg";
import MobileThree from "./mobile-pictures/mob3.jpg";
import MobileFour from "./mobile-pictures/mob4.jpg";
import ShopBag from "./../bagDisplay";

class FurnitureDisplay extends Component {
  state = {
    furnitures: furnitureList,
    homePage: true,
    storeProduct: []
  };
  displayShop = () => {
    this.setState({
      homePage: false
    });
  };
  displayProducts = id => {
    let products = this.state.furnitures.find(furniture => {
      return furniture.id === id;
    });
    let storeProduct = [...this.state.storeProduct, products];
    this.setState({
      storeProduct: storeProduct
    });
    console.log(products);
    console.log(storeProduct);
    console.log(this.state.storeProduct);
  };
  render() {
    return (
      <div style={{ marginTop: "100px" }} className="container">
        {this.state.homePage ? (
          <div className="container">
            <Image
              className="home-page"
              src={homePicture}
              alt="home"
              rounded
              fluid
            />
            <h2
              style={{ backgroundColor: "white" }}
              className="fontSeven head-look"
            >
              go to furniture collection and
            </h2>
            <button
              onClick={this.displayShop}
              class="btn btn-warning coll-btn fontOne"
            >
              Start Shoping
            </button>

            <span className="mobile-device">
              <Image src={MobileOne} alt="mobile" rounded fluid />
              <Image src={MobileTwo} alt="mobile" rounded fluid />
              <Image src={MobileThree} alt="mobile" rounded fluid />
              <Image src={MobileFour} alt="mobile" rounded fluid />
            </span>
          </div>
        ) : (
          <div>
            <h1
              style={{
                marginBottom: "40px",
                fontWeight: "bolder",
                textShadow: "5px 5px 10px"
              }}
              className="fontEight"
            >
              Collection of furniture
            </h1>
            <div
              style={{ width: "80vw" }}
              className="container-fluid grid-furniture"
            >
              {this.state.furnitures.map(furniture => (
                <Furniture
                  key={furniture.id}
                  furniture={furniture}
                  displayProducts={this.displayProducts}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FurnitureDisplay;
