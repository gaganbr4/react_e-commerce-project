import React, { Component } from "react";
//import Form from "../partials/Form";
import { Link } from "react-router-dom";
import { Button, Row } from "reactstrap";
export default class Admin extends Component {
  handleOnClick = event => {
    console.log("on Add Product");
    return;
  };
  render() {
    return (
      <React.Fragment>
        <Row>
          <div className="col-2">
            <Link to="/admin/AddProduct">
              <Button color="primary">Add Product</Button>
            </Link>
          </div>
          {/* <div className="col-4">
            {" "}
            <Link to="/admin/ModifyProduct">
              <span
                className="btn btn-primary"
                // onClick={() => this.handleOnClick()}
              >
                Modify Product
              </span>
            </Link>
          </div> */}
        </Row>
      </React.Fragment>
    );
  }
}
