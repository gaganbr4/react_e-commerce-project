import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            company,
            img,
            description,
            price,
            title
          } = value.detailProducts;
          return (
            <Container className="py-5">
              <Row>
                {/* <div className="col-10 mx-auto col-md-6 my -3"> */}
                <Col>
                  <img src={img} alt=" not loaded" className="img-fluid" />
                </Col>

                <Col>
                  <h1>{title}</h1>
                  <h4 className="text-muted"> Made by: {company}</h4>
                  <h4 className="">
                    <strong>Price : ${price} </strong>
                  </h4>
                  <p className="my-5 text-muted  lead">
                    Product Info : {description}
                  </p>
                  <Link to="/">
                    <Button color="warning">Back to Home</Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          );
        }}
      </ProductConsumer>
    );
  }
}
