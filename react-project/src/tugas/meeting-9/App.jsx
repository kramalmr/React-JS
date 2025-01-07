/* eslint-disable react/prop-types */
import { products } from "./Product.jsx";
import { useState } from "react";
import "./App.css";

const CurrencyFormatter = ({ number }) => {
  const formattedNumber = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);

  return <span>{formattedNumber}</span>;
};

const Product = ({ product, onChange }) => {
  const formattedPrice = <CurrencyFormatter number={product.price} />;
  const [count, setCount] = useState(0);
  const totalPrice = count * product.price;

  const handleTambah = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(product.id, newCount, totalPrice + product.price);
  };

  const handleKurang = () => {
    const newCount = count ? count - 1 : 0;
    setCount(newCount);
    onChange(product.id, newCount, totalPrice - product.price);
  };

  return (
    <div className="product" data-id={product.id}>
      <img src="https://via.placeholder.com/300x200" alt="" />
      <div className="product-text">
        <div>
          <h2>{product.title}</h2>
          <p>{formattedPrice}</p>
        </div>
        <div className="counter-container">
          <div className="counter-button">
            <button className="tambah" onClick={handleTambah}>
              Tambah
            </button>
            <button className="kurang" onClick={handleKurang}>
              Kurang
            </button>
          </div>
          <div className="counter">
            <p>{count}</p>
          </div>
        </div>
      </div>
      {count ? (
        <p className="total-price">
          Total Harga: <CurrencyFormatter number={totalPrice} />
        </p>
      ) : null}
    </div>
  );
};

const Summary = ({ summary }) => {
  const totalHargaKeseluruhan = summary.reduce(
    (total, product) => total + product.totalPrice,
    0
  );

  return (
    <div className="summary">
      <h2>Ringkasan Pembelian</h2>
      <ul>
        {summary
          .filter((product) => product.quantity > 0)
          .map((product) => (
            <li key={product.id}>
              {product.title} x {product.quantity} ={" "}
              <CurrencyFormatter number={product.totalPrice} />
            </li>
          ))}
      </ul>
      <h3>
        Total Keseluruhan: <CurrencyFormatter number={totalHargaKeseluruhan} />
      </h3>
    </div>
  );
};

export const ProductList = () => {
  const [summary, setSummary] = useState([]);

  const handleProductChange = (id, quantity, totalPrice) => {
    setSummary((prevSummary) => {
      const productIndex = prevSummary.findIndex(
        (product) => product.id === id
      );
      if (productIndex === -1 && quantity > 0) {
        return [
          ...prevSummary,
          {
            id,
            title: products.find((p) => p.id === id).title,
            quantity,
            totalPrice,
          },
        ];
      } else if (quantity > 0) {
        const newSummary = [...prevSummary];
        newSummary[productIndex] = {
          ...newSummary[productIndex],
          quantity,
          totalPrice,
        };
        return newSummary;
      } else {
        return prevSummary.filter((product) => product.id !== id);
      }
    });
  };

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onChange={handleProductChange}
            className="productOuter"
          />
        ))}
      </div>
      <Summary summary={summary} />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}
