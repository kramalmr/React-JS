import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Home = () => {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify([]));
  }
  const navigate = useNavigate();

  const handleClear = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products.length === 0) {
      return alert("No products to clear");
    }

    window.confirm("Are you sure you want to clear all products?") &&
      localStorage.removeItem("products");
    window.location.reload();
  };

  return (
    <div>
      <button onClick={() => navigate("/create")}>New Product</button>
      <button onClick={() => navigate("/list")}>Product List</button>
      <button onClick={handleClear}>Clear All Products</button>
    </div>
  );
};

const CreateProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const products = JSON.parse(localStorage.getItem("products"));

    const newProduct = {
      id: products.length + 1,
      name: productName,
      price: productPrice,
      description: productDescription,
    };

    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    window.confirm(
      "Product " +
        productName +
        " created successfully!, do you want to go to the list?"
    ) && navigate("/list");
    setProductName("");
    setProductPrice("");
    setProductDescription("");
  };

  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit} className="create-product-form">
          <h2 className="form-title">Create Product</h2>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
          <button id="create" type="submit">Create</button>
          <a id="cancel" onClick={() => navigate("/")}>Cancel</a>
        </form>
      </div>
    </div>
  );
};

const ProductList = () => {
  const navigate = useNavigate();
  const products = JSON.parse(localStorage.getItem("products"));

const CurrencyFormatter = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};


  return (
    <div>
      <table className="product-list">
        <thead>
            <tr>
              <button className="back-list" onClick={() => navigate("/")}>Back</button>
              Product List
            </tr>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center", color: "red" }}>
                No products found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{CurrencyFormatter(product.price)}</td>
                <td>{product.description}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export { CreateProduct, ProductList };
export default Home;
