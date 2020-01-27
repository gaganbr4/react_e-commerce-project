import React from "react";
import CartItem from "./CartItem";
import { Container } from "reactstrap";
export default function CartList({ value }) {
  const { cart } = value; // since I don't want to use the value.cart
  return (
    <Container>
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </Container>
  );
}
