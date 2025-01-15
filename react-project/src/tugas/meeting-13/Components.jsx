/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

function CobaAxios() {
  const [cuaca, setCuaca] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true"
      )
      .then((response) => {
        setCuaca(response.data);
      });
  }, []);
  return (
    <div>
      <h3>Cuaca Di London Soal 1</h3>
      {cuaca.current_weather && (
        <>
          <p>Temperature: {cuaca.current_weather.temperature}°C</p>
          <p>Windspeed: {cuaca.current_weather.windspeed} km/h</p>
          <p>Winddirection: {cuaca.current_weather.winddirection}°</p>
        </>
      )}
    </div>
  );
}

// SOAL 2

import "./App.css";
// import { use } from "react";

const CurrencyFormatter = ({ number }) => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
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
      <img src={product.image} className="product-image" alt="" />
      <div className="product-details">
      <div className="product-text">
        <div>
          <h2 onMouseOver={(e) => e.currentTarget.style.display = 'block'} onMouseOut={(e) => e.currentTarget.style.display = '-webkit-box'}>{product.title}</h2>
          <p>{formattedPrice}</p>
          <p onMouseOver={(e) => e.currentTarget.style.display = 'block'} onMouseOut={(e) => e.currentTarget.style.display = '-webkit-box'}>{product.description}</p>
        </div>
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

const ProductList = () => {
  const [summary, setSummary] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

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

export { CobaAxios, ProductList };

