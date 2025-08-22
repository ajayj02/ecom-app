import React from "react";
import { useSelector } from "react-redux";

function Total() {
  const cartItems = useSelector((state) => state.cart);
  const totalCost = cartItems.length !== 0 ? findTotalCost(cartItems) : 0;

  function findTotalCost(cartItems) {
    const total = cartItems.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    return total;
  }
  return (
    <div>
      <h3>Total Cost: {totalCost}</h3>
    </div>
  );
}

export default Total;
