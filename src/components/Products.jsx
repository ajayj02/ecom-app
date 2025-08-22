import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/cartSlice";

const products = [
  { id: 1, name: "Macbook", price: 80000 },
  { id: 2, name: "Sofa-set", price: 55000 },
  { id: 3, name: "Smart-Phone", price: 120000 },
  { id: 4, name: "Ipad", price: 32000 },
  { id: 5, name: "Wall-clock", price: 3000 },
];

function Products() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Product Catalog</h1>

      <ul style={{ listStyleType: "none" }}>
        {products.map((product) => (
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
            <button onClick={() => dispatch(addProduct(product))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
