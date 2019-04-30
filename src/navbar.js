import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

class CustomNavbar extends Component {
  state = {};
  render() {
    const { displayOtherPage } = this.props;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand className="fontTwo" href="/home">
          <Link onClick={displayOtherPage} className="brand-look" to="/home">
            Online Shoping
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">
              <Link className="page-look" onClick={displayOtherPage} to="/home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="/furniture">
              <Link
                className="page-look"
                onClick={displayOtherPage}
                to="/furniture"
              >
                Furniture
              </Link>
            </Nav.Link>
            <Nav.Link href="/furniture">
              <Link
                className="page-look"
                onClick={displayOtherPage}
                to="/furniture"
              >
                Technique
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="/shopbag">
          <Link onClick={displayOtherPage} class="cart-btn" to="/shopbag">
            <span class="nav-icon">
              <i class="fas fa-cart-plus" />
            </span>
            <div class="item-plus">0</div>
          </Link>
        </Nav.Link>
      </Navbar>
    );
  }
}

export default CustomNavbar;
