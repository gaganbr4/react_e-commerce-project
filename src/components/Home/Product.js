import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import Buttons from "../partials/ModifyCart";
import "../../index.css";
import { Button, Row, Col } from "reactstrap";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, count } = this.props.product;

    return (
      <div className="p-3 ">
        <div className="card ">
          <ProductConsumer>
            {value => (
              <div className="p-1">
                <Link to="/details">
                  <img
                    src={img}
                    alt="Wrong URL"
                    className="card-img-top img_edit p-1"
                    onClick={() => {
                      value.handleDetail(id);
                    }}
                  />
                </Link>
                <Row>
                  <Col>
                    <div
                      className=" d-flex justify-content-between heading py-0 my-0 title"
                      disabled
                    >
                      <p>{title}</p>
                      <p>${price}</p>
                    </div>
                  </Col>
                </Row>
                <Row className="">
                  {/* <div className="col"> */}{" "}
                  <Col className="col-md-3 col-sm-3  col-lg-5 padding-0">
                    <Button
                      className="pb-0 mb-0"
                      color="primary"
                      disabled={inCart ? true : false}
                      onClick={e => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? (
                        <p disabled className="">
                          In Cart
                        </p>
                      ) : (
                        <p className="">Add</p>
                      )}
                    </Button>
                  </Col>
                  <Col className="col-md-9 col-sm-12 col-lg-7 padding-0">
                    <Buttons
                      className="my-0 py-0"
                      id={id}
                      count={count}
                      handleCount={() => value.handleCount(id)}
                    />
                  </Col>
                </Row>
              </div>
            )}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
