import React from "react";
import Buttons from "../partials/ModifyCart";
import { Button, Row, Col } from "reactstrap";
export default function CartItem({ item, value }) {
  const { id, title, price, count } = item;
  const { removeItem } = value;
  return (
    <Row className="py-3">
      <Col className="">{title}</Col>
      <Col>
        <Buttons className="" id={id} count={count} />
      </Col>
      <Col className="">{price}</Col>
      <Col>
        <Button className="" color="danger" onClick={() => removeItem(id)}>
          Remove
        </Button>
      </Col>
    </Row>
  );
}
