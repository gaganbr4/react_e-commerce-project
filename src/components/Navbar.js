import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { Button } from "reactstrap";
export default class Navbar extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <nav className="navbar bg-light navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
            <Link to="/cart" className="ml-auto">
              <Button color="primary" className="btn-default">
                {value.totalItems_ === 0 ? (
                  <p className="text-center"> My Cart </p>
                ) : (
                  <p> My Cart {value.totalItems_}</p>
                )}
              </Button>
            </Link>
          </nav>
        )}
      </ProductConsumer>
    );
  }
}
