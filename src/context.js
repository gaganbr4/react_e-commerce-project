import React, { Component } from "react";
import { storeProducts, detailProducts } from "./data";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: storeProducts,
      detailProducts: detailProducts,
      cart: [],
      totalItems_: 0
    };
    this.addToCart = this.addToCart.bind(this);
  }
  //
  componentWillMount() {
    localStorage.getItem("cart") &&
      this.setState({
        totalItems_: JSON.parse(localStorage.getItem("totalItems_")),
        cart: JSON.parse(localStorage.getItem("cart"))
      });
    console.log("will mount", this.state.cart);
  }

  componentDidUpdate() {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
    localStorage.setItem("totalItems_", JSON.stringify(this.state.totalItems_));
    // localStorage.setItem("products", JSON.stringify(this.state.products));
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProducts: product };
    });
  };
  addToCart = async id => {
    let tempproducts = [...this.state.products];
    const index = tempproducts.indexOf(this.getItem(id));

    const product = tempproducts[index];
    product.inCart = true;
    product.count = 1;
    await this.setState({ cart: [...this.state.cart, product] });
    this.totalItems();
    this.handleCount(id);
  };

  increment = async id => {
    let tempproducts = [...this.state.products];
    const selectedProduct = tempproducts.find(item => item.id === id);

    selectedProduct.count += 1;
    selectedProduct.inCart = true;
    console.log("Procuts in data ", this.state.products);
    if (this.state.cart.includes(selectedProduct)) {
      console.log("already in cart");
      await this.setState(() => {
        return {
          cart: [...this.state.cart]
        };
      });
    } else {
      await this.setState(() => {
        return {
          cart: [...this.state.cart, selectedProduct]
        };
      });
    }
    this.totalItems();
    this.handleCount(id);
    console.log(" Inside Cart", this.state.cart);
    console.log("\n\n\n\n\n");
  };

  decrement = async id => {
    let tempproducts = [...this.state.products];
    const selectedProduct = tempproducts.find(item => item.id === id);

    selectedProduct.count -= 1;
    if (selectedProduct.count <= 0) {
      selectedProduct.count = 0;
      selectedProduct.inCart = false;
      this.removeItem(id);
    }
    //#region
    // if(this.state.cart.includes(selectedProduct)){
    //   await this.setState(() => {
    //     return {
    //       cart: [...this.state.cart, ]
    //     };
    //   });
    // }
    // else{

    //   await this.setState(() => {
    //     return {
    //       cart: [...this.state.cart, selectedProduct]
    //     };
    //   });
    // }
    //#endregion
    this.totalItems();
    this.handleCount(id);
    //#region
    // let tempCart = [...this.state.cart];
    // const index = tempCart.indexOf(this.getItem(id));

    // let itemCount = (tempCart[index].count);
    // console.log("itemcount ", itemCount);
    // if (itemCount <= 0) {
    //   this.removeItem(id);
    //   return ;
    // }
    // tempCart[index].count-=1;
    // this.totalItems();

    // this.setState(() => {
    //   return {
    //     cart: [...tempCart]
    //   };
    // });
    //#endregion
  };

  removeItem = id => {
    // Reomove a particalar item from cart
    let tempproducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempproducts.indexOf(this.getItem(id));
    let removedProduct = tempproducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;

    this.setState(() => {
      return {
        cart: [...tempCart],
        product: [...tempproducts]
      };
    });
    this.totalItems();
  };

  totalItems = async () => {
    // increse the total number of Items every time it is called.
    let number = 0;
    this.state.cart.map(item => {
      return (number = number + item.count);
    });
    await this.setState({ totalItems_: number });
  };
  handleCount = id => {
    if (this.state.cart) {
      let tempproducts = [...this.state.cart];
      const selectedProduct = tempproducts.find(item => item.id === id);

      if (selectedProduct) {
        return selectedProduct.count;
      } else return;
    } else return;
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          totalItems: this.totalItems,
          handleCount: this.handleCount
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
