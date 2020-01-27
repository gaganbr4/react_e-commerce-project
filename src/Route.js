import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactstrap";
import Navbar from "./components/Navbar";

import ProductList from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Details from "./components/Home/ProductDetails";
import Admin from "./components/Admin/Admin";
import FormHandler from "./components/partials/Form";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin/AddProduct" component={FormHandler} />
          <Route path="/admin/ModifyProduct" component={FormHandler} />s
        </Switch>
        <Route exact path="/admin" component={Admin}></Route>
      </React.Fragment>
    );
  }
}

export default App;
