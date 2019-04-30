import React, { Component } from "react";
import "./App.css";
import FurnitureDisplay from "./furniture component/furnitureDisplay.js";
import CustomNavbar from "./navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import ShopBag from "./bagDisplay";

class App extends Component {
  state = {
    displayHomePage: true,
    displayShopBag: false
  };
  displayOtherPage = () => {
    this.setState({
      displayHomePage: false
    });
  };
  render() {
    return (
      <BrowserRouter>
        <CustomNavbar displayOtherPage={this.displayOtherPage} />
        {this.state.displayHomePage ? (
          <Home />
        ) : (
          <div>
            <Route exath path="/home" component={Home} />
            <Route path="/furniture" component={FurnitureDisplay} />
            <Route path="/shopbag" component={ShopBag} />
          </div>
        )}
      </BrowserRouter>
    );
  }
}

export default App;
