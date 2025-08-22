import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log("in cart: ", cartItems);

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
              maxWidth: "300px",
              borderRadius: "5px",
              marginBottom: "5px",
              padding: "5px",
            }}
            key={product.id}
          >
            <span style={{ marginRight: "20px" }}>
              {product.name} - INR {product.price}
            </span>
            <button onClick={() => dispatch()}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
