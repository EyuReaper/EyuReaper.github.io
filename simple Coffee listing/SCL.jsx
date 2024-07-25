// App.js
import React from "react";
import "./App.css";

const App = () => {
  const products = [
    {
      image: "cappuccino.jpg",
      name: "Cappuccino",
      price: 4.2,
      rating: "4.7 (15 reviews)",
    },
    {
      image: "house-coffee.jpg",
      name: "House Coffee",
      price: 4.5,
      rating: "4.8 (20 reviews)",
    },
    {
      image: "espresso.jpg",
      name: "Espresso",
      price: 4.0,
      rating: "4.0 (15 reviews)",
    },
    {
      image: "coffee-latte.jpg",
      name: "Coffee Latte",
      price: 4.5,
      rating: "4.6 (18 reviews)",
    },
    {
      image: "chocolate-coffee.jpg",
      name: "Chocolate Coffee",
      price: 4.0,
      rating: "4.3 (10 reviews)",
    },
    {
      image: "valentine-special.jpg",
      name: "Valentine Special",
      price: 4.9,
      rating: "4.2 (8 reviews)",
    },
  ];

  return (
    <div className="container">
      <header>
        <div className="logo">Simple Coffee Listing</div>
        <nav>
          <a href="#">All Products</a>
          <a href="#">Available Now</a>
        </nav>
      </header>
      <main>
        <section className="products">
          <h2>Our Collection</h2>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="product-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <div className="rating">{product.rating}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
