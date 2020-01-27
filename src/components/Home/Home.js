import React from "react";
import Product from "./Product";
import { ProductConsumer } from "../../context";

export default class ProductList extends React.Component {
  render() {
    return (
      <div className="row">
        <ProductConsumer>
          {value => {
            return value.products.map(product => {
              return <Product key={product.id} product={product} />;
            });
          }}
        </ProductConsumer>
      </div>
    );
  }
}
