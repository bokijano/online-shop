import React, { Component } from "react";
import PictureOne from "./pictures/furniture1.jpg";
import PictureTwo from "./pictures/furniture2.jpg";
import PictureThree from "./pictures/furniture3.jpg";
import PictureFour from "./pictures/furniture4.jpg";
import PictureFive from "./pictures/furniture5.jpg";
import PictureSix from "./pictures/furniture6.jpg";
import PictureSeven from "./pictures/furniture7.jpg";
import PictureEight from "./pictures/furniture8.jpg";
import PictureNine from "./pictures/furniture9.jpg";
import PictureTen from "./pictures/furniture10.jpg";
import PictureEleven from "./pictures/furniture11.jpg";
import PictureTwelve from "./pictures/furniture12.jpg";
import { Image } from "react-bootstrap";

class Furniture extends Component {
  state = {
    pictures: [
      PictureOne,
      PictureTwo,
      PictureThree,
      PictureFour,
      PictureFive,
      PictureSix,
      PictureSeven,
      PictureEight,
      PictureNine,
      PictureTen,
      PictureEleven,
      PictureTwelve
    ]
  };
  render() {
    const { id, title, price } = this.props.furniture;
    const pictures = this.state.pictures;
    return (
      <section className="img-container">
        <Image src={pictures[id - 1]} alt="product" rounded fluid />
        <h4 style={{ marginTop: "10px" }} className="fontEight">
          {title}
        </h4>
        <h3 className="fontSeven">{price} RSD</h3>
        <button
          onClick={() => this.props.displayProducts(id)}
          className="btn btn-primary btn-display fontOne"
        >
          Add to Bag
        </button>
      </section>
    );
  }
}

export default Furniture;
