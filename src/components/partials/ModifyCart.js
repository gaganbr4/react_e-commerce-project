import React from "react";
import { ProductConsumer } from "../../context";
import { Button, Row, Col, Container } from "reactstrap";
//import render from "../..";
export default class Buttons extends React.Component {
  //const { increment, decrement, removeItem } = value;
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // value.handleCount(id) // return the count of selectedProduct
  componentWillMount() {
    this.setState({ count: this.props.handleCount });
  }
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            return (
              <Container className="edit_button">
                <Row className="">
                  <Col>
                    <Button
                      className=""
                      color="danger"
                      onClick={() => value.decrement(this.props.id)}
                    >
                      -
                    </Button>
                  </Col>
                  <Col>
                    {/* count comes here */}
                    {/* {this.setState({ count: value.handleCount(this.props.id) })} */}
                    {/* {this.state.count} */}
                    {value.handleCount(this.props.id)}
                  </Col>
                  <Col>
                    <Button
                      className=""
                      color="success "
                      onClick={() => {
                        value.increment(this.props.id);
                      }}
                    >
                      +
                    </Button>
                  </Col>
                </Row>
              </Container>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
