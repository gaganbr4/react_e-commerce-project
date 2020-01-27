import React, { Component } from "react";
import { storeProducts } from "../../data";
import render from "../../index";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { ValidatorForm } from "react-form-validator-core";
import TextInput from "./TextInput";
export default class FormHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      img: "",
      price: [],
      description: "",
      inCart: false,
      count: 0,
      company: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Product Added");
    let obj = {
      id: this.state.id,
      title: this.state.title,
      img: this.state.img,
      price: parseInt(this.state.price),
      description: this.state.description,
      inCart: this.state.inCart,
      count: this.state.count,
      company: this.state.company
    };

    storeProducts.push(obj);
    console.log(storeProducts);

    render();
  }
  handleCancel(event) {
    console.log("cancel is clicked");
  }
  onFieldChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div>
        <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">Product ID</label>
            <TextInput
              name="id"
              value={this.state.id}
              onChange={this.onFieldChange}
              type="text"
              className="form-control mb-4 "
              placeholder="Enter Product ID"
              validators={["required", "isNumber", "isPositive"]}
            />

            <label htmlFor="title">Product Name</label>
            <TextInput
              name="title"
              value={this.state.title}
              onChange={this.onFieldChange}
              type="text"
              className="form-control mb-4 "
              placeholder="Enter Product Name"
              validators={["required", "isString"]}
            />
            <label htmlFor="company">Company</label>
            <TextInput
              name="company"
              value={this.state.company}
              onChange={this.onFieldChange}
              type="text"
              className="form-control mb-4 "
              placeholder="Enter Company"
              validators={["required", "isString"]}
            />

            <label htmlFor="img">Image URL</label>
            <TextInput
              name="img"
              value={this.state.img}
              onChange={this.onFieldChange}
              type="text"
              className="form-control mb-4"
              placeholder="Enter Image URL "
              validators={["required", "isString"]}
            />

            <label htmlFor="price">Price of Product</label>
            <TextInput
              name="price"
              value={this.state.price}
              onChange={this.onFieldChange}
              type="text"
              className="form-control mb-4"
              placeholder="Price ?"
              validators={["required", "isFloat", "isPositive"]}
            />

            <label htmlFor="title">Description</label>
            <TextInput
              name="description"
              value={this.state.description}
              onChange={this.onFieldChange}
              type="text"
              className="form-control mb-4"
              placeholder="Enter Product Description"
              validators={["isString", "minStringLength:20"]}
            />
            <div className="row">
              <div className="col-2">
                {" "}
                <Button
                  color="success"
                  // className="btn btn-primary mx-2 "
                  type="submit"
                >
                  Add Product{" "}
                </Button>
              </div>
              <div className="col-2">
                {" "}
                <Link to="/admin">
                  <Button
                    color="danger"
                    // className="btn btn-danger col"
                    onClick={() => {
                      this.handleCancel();
                    }}
                    value="Cancel"
                  >
                    {" "}
                    Cancel{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}
