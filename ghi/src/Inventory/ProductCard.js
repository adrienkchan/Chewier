// Dependencies
import React, { useState } from "react";
import { Card } from "react-bootstrap";
// import ProductItemForm from "./FoodProductForm";

// CSS
import "../Styles/ProductCard.css";
import addtocart from "../Images/addtocart.png";

export default function ProductCard(props) {
  const [showCartButton, setCartButton] = useState(false);
  const { product, onAdd } = props;

  function showButton() {
    setCartButton(true);
  }

  function hideButton() {
    setCartButton(false);
  }

  return (
    <Card className="my-3 p-3 rounded border-0">
      <div
        className="image-container"
        onMouseEnter={showButton}
        onMouseLeave={hideButton}
      >
        <Card.Img
          className="product-image"
          src={product.picture_url}
          alt={product.name}
        />
      </div>
      <Card.Body className="card-text-padding">
        <Card.Text className="my-3">{product.name}</Card.Text>
        <Card.Text className="my-3">${product.price}</Card.Text>
        <div className="actions">
          <button onClick={() => onAdd(product)} className="button">
            + Add To Cart
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}
