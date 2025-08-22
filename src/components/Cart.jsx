import { useDispatch, useSelector } from "react-redux";
import {
  addByOne,
  removeByOne,
  removeProduct,
  clearCart,
} from "../redux/slices/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div>
        <h1>My Cart</h1>
        <p>Cart is empty</p>
      </div>
    );
  }

  return (
    <div>
      <h1>My Cart</h1>

      <ul style={{ listStyleType: "none" }}>
        {cartItems.map((product) => (
          <li
            style={{
              border: "1px solid black",
              maxWidth: "450px",
              borderRadius: "5px",
              marginBottom: "5px",
              padding: "5px",
            }}
            key={product.id}
          >
            <span style={{ marginRight: "20px" }}>
              {product.name} - INR {product.price}
            </span>
            <button onClick={() => dispatch(addByOne(product.id))}>+</button>
            <button onClick={() => dispatch(removeByOne(product.id))}>-</button>
            <button onClick={() => dispatch(removeProduct(product.id))}>
              Remove item
            </button>

            <span style={{ marginLeft: "20px" }}>
              {product.quantity} X INR {product.price}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}

export default Cart;
