import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Route";
import { ProductProvider } from "./context";

export default function render() {
  ReactDOM.render(
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>,
    document.getElementById("root")
  );
}

render();
