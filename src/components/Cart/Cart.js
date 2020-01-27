import React, { Component } from "react";
import { ProductConsumer } from "../../context";

import CartList from "./CartList";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            return (
              <React.Fragment>
                <CartList value={value} />
              </React.Fragment>
            );
          }}
        </ProductConsumer>
      </section>
    );
  }
}
